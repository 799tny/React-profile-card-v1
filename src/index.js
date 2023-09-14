import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skillData = [
  {
    skill: "HTML5",
    level: "Advanced",
    color: "red",
  },
  {
    skill: "CSS3",
    level: "Intermediate",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "#0ff",
  },
  {
    skill: "Git & Github",
    level: "Advanced",
    color: "orange",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="me" />;
}
function Intro() {
  return (
    <div>
      <h1>Dina Tanos-Alexandru</h1>
      <p>
        On a career change journey, aspiring become a great Frontend Web
        Developer.My goal is to be hired as one by the end of the year.
      </p>
    </div>
  );
}
function SkillList() {
  const skills = skillData;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skills skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skills({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "Beginner"
          ? `👶`
          : skillObj.level === "Intermediate"
          ? "👍"
          : skillObj.level === "Advanced"
          ? "💪"
          : ""}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vit
