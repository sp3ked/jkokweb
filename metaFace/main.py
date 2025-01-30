# main.py

import detect
import filter

def main():
    video_file = "test.mp4"         # Replace with your video file path
    detected_faces_dir = "detected_faces"  # Directory to save detected face images
    filtered_faces_dir = "filtered_faces"  # Directory to save clustered face images
    frame_interval = 10                    # Adjust as needed
    images_per_face = 3                    # Number of images per unique face

    # Step 1: Extract faces from video
    detect.extract_faces_from_video(video_file, detected_faces_dir, frame_interval)

    # Step 2: Filter and group faces
    filter.filter_and_group_faces(detected_faces_dir, filtered_faces_dir, images_per_face)

if __name__ == '__main__':
    main()
