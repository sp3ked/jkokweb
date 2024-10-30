# detect.py

import cv2
import os
import torch
from facenet_pytorch import MTCNN
import logging
from PIL import Image
from tqdm import tqdm

def setup_logging():
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def extract_faces_from_video(video_path, output_dir, frame_interval=10):
    setup_logging()
    logging.info("Starting face extraction from video...")

    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    mtcnn = MTCNN(image_size=160, margin=20, thresholds=[0.6, 0.7, 0.7], device=device)
    
    os.makedirs(output_dir, exist_ok=True)
    
    
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    logging.info(f"Total frames in video: {total_frames}")

    frame_idx = 0
    saved_faces = 0

    with tqdm(total=total_frames) as pbar:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break
            if frame_idx % frame_interval == 0:
                frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                frame_pil = Image.fromarray(frame_rgb)

                boxes, probs = mtcnn.detect(frame_pil)
                if boxes is not None:
                    for i, (box, prob) in enumerate(zip(boxes, probs)):
                        if prob < 0.90:
                            continue 
                       
                       
                        face = frame_pil.crop(box)
                        
                        
                        face_filename = f"frame{frame_idx}_face{i}.jpg"
                        face.save(os.path.join(output_dir, face_filename))
                        saved_faces += 1

            frame_idx += 1
            pbar.update(1)

    cap.release()
    logging.info(f"Face extraction complete! Saved {saved_faces} face images.")
