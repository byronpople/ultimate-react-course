import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

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
  return (
    <div>
      <img
        alt="profile-image"
        className="avatar"
        src="https://media.istockphoto.com/id/1491503471/photo/young-black-man-with-a-afro-hairstyle-looking-into-the-camera-whilst-having-his-face-turned.jpg?s=2048x2048&w=is&k=20&c=9F28c0MYM3WFci8gBDjh-bhMXUewmjsE4EFfqQjIuO4="
      />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Jame Fish</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

function SkillList() {
  return <ul className="skill-list">{rendersSkills()}</ul>;
}

const rendersSkills = () => {
  const skillData = [
    { name: "HTML + CSS", level: "beginner", color: "blue" },
    { name: "JSX", level: "middle", color: "yellow" },
    { name: "Vue,js", level: "advanced", color: "green" },
    { name: "React native", level: "god", color: "red" },
  ];
  return skillData.map((skill) => {
    return (
      <Skill
        skill={skill.name}
        level={skill.level}
        color={skill.color}
        key={skill.name}
      />
    );
  });
};

function Skill({ skill, level, color }) {
  return (
    <li style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😀"}
        {level === "god" && "😇"}
        {level === "middle" && "🥳"}
        {level === "advanced" && "🥶"}
      </span>
    </li>
  );
}

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
//       <span>{props.skillName}</span>
//       <span>{props.favicon}</span>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
