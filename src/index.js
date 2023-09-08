import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return (
    <div className="skill-list">
      <Skills skill="HTML5" emoji="💪" color="red" />
      <Skills skill="CSS3" emoji="👍" color="blue" />
      <Skills skill="JavaScript" emoji="👍" color="yellow" />
      <Skills skill="React" emoji="👶" color="#0ff" />
      <Skills skill="Git + GitHub" emoji="👶" color="orange" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
