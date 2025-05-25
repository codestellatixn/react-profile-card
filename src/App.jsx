import "./App.css";
import picture from "./assets/picture.jpg";

const skills = [
  {
    skill: "Shreds in Solitude",
    level: "advanced",
    color: "#ffd6ff",
  },
  {
    skill: "Anxious",
    level: "advanced",
    color: "#e7c6ff",
  },
  {
    skill: "Stealth Mode",
    level: "intermediate",
    color: "#c8b6ff",
  },
  {
    skill: "Internal Screaming",
    level: "advanced",
    color: "#b8c0ff",
  },
  {
    skill: "Social Butterfly",
    level: "beginner",
    color: "#bbd0ff",
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
  return <img src={picture} alt="profile photo" className="avatar" />;
}

function Intro() {
  return (
    <>
      <h1>Hitori Gotoh</h1>
      <p>
        Hi... um... I'm Hitori Gotoh, but you can call me <i>Bocchi</i>... or
        not... that's fine too...
        <br />
        My dream is to become a famous musician.
        <br />I may not talk much, but if you ever need someone to absolutely
        annihilate a guitar solo while simultaneously panicking inside. I'm your
        girl!
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({skill, level, color}) {
  return (
    <div className="skill" style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😐"}
        {level === "intermediate" && "😉"}
        {level === "advanced" && "👹"}
      </span>
    </div>
  );
}

export default App;
