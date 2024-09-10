import React from "react";
import { Collapse } from "antd";
import "./active.css"
import img1 from "../../Assests/class-timing.png";
import img2 from "../../Assests/course-outline.png";
import img3 from "../../Assests/leacture.png";
import img4 from "../../Assests/course-R.png";
import img5 from "../../Assests/forums.png";
import img6 from "../../Assests/anoucement.png";
import img7 from "../../Assests/assignment.png";
import img8 from "../../Assests/live quizes.png";
import img9 from "../../Assests/attendance.png";
import img10 from "../../Assests/result.png";
import img11 from "../../Assests/instructor.png";
import img12 from "../../Assests/presentation.png";


const { Panel } = Collapse;

const items = [
  { key: 1, label: "Class Timing", icon: img1 },
  { key: 2, label: "Course Outline", icon: img2 },
  { key: 3, label: "Lectures", icon: img3 },
  { key: 4, label: "Course Resources", icon: img4 },
  { key: 5, label: "Assignments", icon: img7 },
  { key: 6, label: "Presentations", icon: img12 },
  { key: 7, label: "Live Quizzes", icon: img8 },
  { key: 8, label: "Announcements", icon: img6 },
  { key: 9, label: "Attendance", icon: img9 },
  { key: 10, label: "Forum", icon: img10 },
  { key: 11, label: "Result", icon: img7 },
  { key: 12, label: "Instructor", icon: img7 },
];
const Active = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "blue",
          margin: "0 25px",
          padding: "10px 25px",
        }}
      >
        <h2 style={{ color: "white" }}>Active Courses</h2>
      </div>
      <div
        style={{
          margin: "20px 25px",
          borderRadius: "16px",
        }}
      >
        <Collapse defaultActiveKey={["1"]}>
          <Panel
            header="Fundamentals of Programming"
            key="1"
            className="custom-panel-header"
          >
            <div className="custom-panel-content">
              {items.map((item) => (
                <div key={item.key}>
                  <img src={item.icon} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
export default Active;
