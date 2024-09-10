import face_recognition
import cv2
import numpy as np
import os
from datetime import datetime
import time

# Load known faces from the 'known_faces' directory
known_face_encodings = []
known_face_names = []

# Ensure the 'known_faces' directory exists and is not empty
if not os.path.exists('known_faces') or not os.listdir('known_faces'):
    print("Error: 'known_faces' directory is empty or does not exist.")
    exit()

# Load the known faces and their encodings
for filename in os.listdir('known_faces'):
    if filename.endswith(".jpg") or filename.endswith(".png"):
        try:
            image = face_recognition.load_image_file(f'known_faces/{filename}')
            encoding = face_recognition.face_encodings(image)
            if len(encoding) > 0:  # Check if a face encoding was found
                known_face_encodings.append(encoding[0])
                known_face_names.append(filename.split(".")[0])  # Store the employee's name
            else:
                print(f"No face found in {filename}, skipping.")
        except IndexError:
            print(f"Warning: No faces found in {filename}, skipping.")

# Initialize the camera
video_capture = cv2.VideoCapture(0)
if not video_capture.isOpened():
    print("Error: Could not open video source.")
    exit()

# Create 'attendance' directory if it doesn't exist
if not os.path.exists('attendance'):
    os.makedirs('attendance')

# Function to log attendance
def mark_attendance(name):
    with open('attendance/attendance_log.txt', 'a') as f:
        now = datetime.now()
        dt_string = now.strftime('%Y-%m-%d %H:%M:%S')
        f.write(f'{name}, {dt_string}\n')
        print(f"Attendance marked for {name} at {dt_string}")

# Function to load already marked attendance for today
def load_marked_attendance():
    today = datetime.now().strftime('%Y-%m-%d')
    marked = set()
    attendance_log_path = 'attendance/attendance_log.txt'
    if os.path.exists(attendance_log_path):
        with open(attendance_log_path, 'r') as f:
            for line in f:
                try:
                    name, dt_string = line.strip().split(', ')
                    date = dt_string.split(' ')[0]
                    if date == today:
                        marked.add(name)
                except ValueError:
                    # Handle improperly formatted lines
                    continue
    return marked

# Initialize the marked_attendance set with today's attendance
marked_attendance = load_marked_attendance()

# Function to draw detailed text
def draw_detailed_text(image, name, attendance_marked, position):
    # Text to display
    text_1 = f"FACE DETECTED:"
    text_2 = f"NAME: {name.upper()}"
    text_3 = f"ATTENDANCE MARKED: {'TRUE' if attendance_marked else 'FALSE'}"

    # Define font and size
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.8
    thickness = 2
    color = (0, 255, 0)  # Green color

    # Draw the text with bold effect by drawing it multiple times (to simulate boldness)
    cv2.putText(image, text_1, (position[0], position[1]), font, font_scale, color, thickness)
    cv2.putText(image, text_2, (position[0], position[1] + 30), font, font_scale, color, thickness)
    cv2.putText(image, text_3, (position[0], position[1] + 60), font, font_scale, color, thickness)


# Main loop for face recognition
while True:
    # Capture a frame from the camera
    ret, frame = video_capture.read()

    if not ret:
        print("Failed to capture image from camera")
        break

    # Resize frame for faster face recognition processing
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    # Convert the frame from BGR to RGB (required by face_recognition)
    rgb_small_frame = np.ascontiguousarray(small_frame[:, :, ::-1])

    # Find all face locations and encodings in the current frame
    face_locations = face_recognition.face_locations(rgb_small_frame)

    if face_locations:  # Check if any faces are detected
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        # Loop through each face encoding detected
        for face_encoding, face_location in zip(face_encodings, face_locations):
            # Compare the detected face with known faces
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
            face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)

            # Proceed only if there are face distances and at least one match
            if face_distances.size > 0 and any(matches):
                best_match_index = np.argmin(face_distances)

                # Check if the best match is a valid match
                if matches[best_match_index]:
                    name = known_face_names[best_match_index]

                    # Check if attendance has already been marked for this user
                    if name in marked_attendance:
                        # Draw a yellow box around the face if attendance already marked
                        top, right, bottom, left = face_location
                        top *= 4
                        right *= 4
                        bottom *= 4
                        left *= 4
                        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 255), 2)  # Yellow box

                        # Display the detailed info
                        draw_detailed_text(frame, name, attendance_marked=True, position=(left, bottom + 30))

                        # Keep the camera feed active for 5 seconds
                        start_time = time.time()
                        while time.time() - start_time < 5:
                            ret, frame = video_capture.read()
                            if not ret:
                                break
                            # Redraw the rectangle and text for each new frame
                            cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 255), 2)
                            draw_detailed_text(frame, name, attendance_marked=True, position=(left, bottom + 30))
                            cv2.imshow('Video', frame)

                            if cv2.waitKey(1) & 0xFF == ord('q'):
                                break

                        # Close the camera after 5 seconds
                        video_capture.release()
                        cv2.destroyAllWindows()
                        exit()
                    else:
                        # Mark attendance and add to the set
                        mark_attendance(name)
                        marked_attendance.add(name)

                        # Draw a green box around the face for a new attendance
                        top, right, bottom, left = face_location
                        top *= 4
                        right *= 4
                        bottom *= 4
                        left *= 4
                        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)  # Green box

                        # Display the detailed info
                        draw_detailed_text(frame, name, attendance_marked=False, position=(left, bottom + 30))

                        # Keep the camera feed active for 5 seconds
                        start_time = time.time()
                        while time.time() - start_time < 5:
                            ret, frame = video_capture.read()
                            if not ret:
                                break
                            # Redraw the rectangle and text for each new frame
                            cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
                            draw_detailed_text(frame, name, attendance_marked=False, position=(left, bottom + 30))
                            cv2.imshow('Video', frame)

                            if cv2.waitKey(1) & 0xFF == ord('q'):
                                break

                        # Close the camera after 5 seconds
                        video_capture.release()
                        cv2.destroyAllWindows()
                        exit()
                else:
                    print("No matching face found, continuing to search...")

    # Display the video feed
    cv2.imshow('Video', frame)

    # Break the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close any open windows if no match is found
video_capture.release()
cv2.destroyAllWindows()