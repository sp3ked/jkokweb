# filter.py

import cv2
import numpy as np
import os
import shutil
from sklearn.cluster import AgglomerativeClustering
from concurrent.futures import ThreadPoolExecutor
import logging
from facenet_pytorch import InceptionResnetV1
import torch
from tqdm import tqdm

def setup_logging():
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Initialize InceptionResnetV1
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
resnet = InceptionResnetV1(pretrained='vggface2').eval().to(device)

def get_face_features(image_path):
    """Extract face features using a pre-trained model."""
    try:
        from PIL import Image

        img = Image.open(image_path).convert('RGB')
        img = img.resize((160, 160))

        img_tensor = torch.tensor(np.array(img), device=device).permute(2, 0, 1).unsqueeze(0).float()
        img_tensor /= 255.0 


        with torch.no_grad():
            embedding = resnet(img_tensor)
        features = embedding.squeeze().cpu().numpy()
        features = features / np.linalg.norm(features)

        return features

    except Exception as e:
        logging.warning(f"Error processing {image_path}: {str(e)}")
        return None

def calculate_image_quality(image_path):
    """Calculate image quality score based on clarity and contrast."""
    try:
        img = cv2.imread(image_path)
        if img is None:
            return 0

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        clarity_score = cv2.Laplacian(gray, cv2.CV_64F).var()
        contrast_score = np.std(gray.astype(float))
        quality_score = (0.5 * clarity_score) + (0.5 * contrast_score)

        return quality_score

    except Exception as e:
        logging.warning(f"Error calculating quality for {image_path}: {str(e)}")
        return 0

def filter_and_group_faces(input_dir, output_dir, images_per_face=3):
    """Filter and group similar faces with improved feature extraction and clustering."""
    setup_logging()
    logging.info("Starting face filtering and grouping process...")

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    image_paths = [os.path.join(input_dir, f) for f in os.listdir(input_dir)
                   if f.lower().endswith(('.jpg', '.jpeg', '.png'))]

    logging.info(f"Found {len(image_paths)} images to process")

    face_data = []
    with ThreadPoolExecutor(max_workers=4) as executor:
        results = list(tqdm(executor.map(get_face_features, image_paths), total=len(image_paths)))
        for idx, (image_path, features) in enumerate(zip(image_paths, results)):
            if features is not None:
                face_data.append({
                    'path': image_path,
                    'features': features,
                    'quality': calculate_image_quality(image_path)
                })
            else:
                logging.debug(f"No features extracted for {image_path}")

    logging.info(f"Faces detected in images: {len(face_data)}")

    if not face_data:
        logging.error("No valid faces found in the input directory")
        return

    features = np.array([f['features'] for f in face_data])
    distance_threshold = 0.7 
    clustering = AgglomerativeClustering(
        n_clusters=None,
        distance_threshold=distance_threshold,
        metric='cosine',         
        linkage='average'
    ).fit(features)

    num_clusters = len(set(clustering.labels_))
    logging.info(f"Number of clusters found: {num_clusters}")

    face_groups = {}
    for idx, label in enumerate(clustering.labels_):
        if label not in face_groups:
            face_groups[label] = []
        face_groups[label].append(face_data[idx])

    for group_idx, group in face_groups.items():
        group.sort(key=lambda x: x['quality'], reverse=True)

        group_dir = os.path.join(output_dir, f'face_group_{group_idx}')
        os.makedirs(group_dir, exist_ok=True)

        for i, face in enumerate(group[:images_per_face]):
            source_path = face['path']
            dest_path = os.path.join(group_dir, os.path.basename(source_path))
            shutil.copy2(source_path, dest_path)

        logging.info(f"Processed group {group_idx}: {len(group)} images, kept {min(images_per_face, len(group))}")

    num_unique_faces = len(face_groups)
    logging.info("Face filtering and grouping complete!")
    logging.info(f"Found {num_unique_faces} unique faces")

