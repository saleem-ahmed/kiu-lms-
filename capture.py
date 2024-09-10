import cv2
import os
import time
import face_recognition

# Initialize camera
cam = cv2.VideoCapture(0)

if not cam.isOpened():
    print("Error: Could not open camera.")
    exit()

print("Camera is now on. Press 'q' to capture the image.")

# Display the camera feed for 5 seconds or until 'q' is pressed
start_time = time.time()
while True:
    ret, frame = cam.read()

    if not ret:
        print("Failed to grab frame")
        break

    # Show the video feed
    cv2.imshow("Camera Feed", frame)

    # Exit loop if 'q' is pressed or after 5 seconds
    if cv2.waitKey(1) & 0xFF == ord('q') or time.time() - start_time > 5:
        break

# Capture and process the frame
if ret:
    # Create 'known_faces' directory if it doesn't exist
    if not os.path.exists('known_faces'):
        os.makedirs('known_faces')

    # Encode the face in the captured frame
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    captured_face_encodings = face_recognition.face_encodings(rgb_frame)

    if len(captured_face_encodings) == 0:
        print("No face detected. Please try again.")
    else:
        # Check if the captured face matches any known faces
        face_found = False

        for filename in os.listdir('known_faces'):
            if filename.endswith(".jpg") or filename.endswith(".png"):
                # Load known face image and get its encoding
                known_image = face_recognition.load_image_file(f'known_faces/{filename}')
                known_face_encodings = face_recognition.face_encodings(known_image)

                if len(known_face_encodings) > 0:
                    match = face_recognition.compare_faces([known_face_encodings[0]], captured_face_encodings[0])
                    if match[0]:
                        print(f"Face already registered for {filename}. No new image will be saved.")
                        face_found = True
                        break

        # If no match is found, save the captured image
        if not face_found:
            name = input("Enter the name for the image: ")
            img_name = f"known_faces/{name}.jpg"
            cv2.imwrite(img_name, frame)
            print(f"Image saved as {img_name}")

# Release the camera and close windows
cam.release()
cv2.destroyAllWindows()