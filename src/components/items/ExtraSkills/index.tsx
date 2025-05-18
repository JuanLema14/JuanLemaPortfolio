import ExtraSkillItem from "./ExtraSkillItem";

const skills = [
  "Teamwork",
  "Problem Solving",
  "Git & GitHub",
  "Adaptability",
  "Agile/Scrum",
  "Communication",
];

const ExtraSkills = () => {
  return (
    <div className="w-[186px] h-huge flex flex-col gap-2">
      {skills.map((skill, idx) => (
        <ExtraSkillItem key={idx} label={skill} />
      ))}
    </div>
  );
};

export default ExtraSkills;
