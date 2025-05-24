"use client";

import KnowledgeCard from "../../items/KnowledgeCard";
import {
  FaCode,
  FaPaintBrush,
  FaBuilding,
  FaDraftingCompass,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";

const knowledgeItems = [
  {
    icon: <FaCode />,
    title: "Web Development",
    caption: "Frontend & Backend",
  },
  {
    icon: <FaPaintBrush />,
    title: "UX/UI Design",
    caption: "User-centered design",
  },
  {
    icon: <FaPalette />,
    title: "Logo Design",
    caption: "Brand identity solutions",
  },
  {
    icon: <FaBuilding />,
    title: "Architecture",
    caption: "System & software architecture",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Solutions",
    caption: "Creative problem solving",
  },
  {
    icon: <FaLaptopCode />,
    title: "Development",
    caption: "Fullstack & Agile",
  },
];

const MyKnowledge = () => {
  return (
    <section className="w-[970px] h-[653px] flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="text-[32px] leading-[124%] font-bold font-inter text-[var(--color-darktext)]">
        My Knowledge
      </h2>

      {/* Descripción */}
      <p className="mt-4 w-[438px] text-[15px] leading-[24px] font-normal text-[var(--color-graytext)] capitalize">
        Over 3 years of experience as a web developer, leading frontend and
        backend projects. I’ve automated manual processes at the University of
        Antioquia’s publishing department, developed credit systems for a
        fintech, and built mass email solutions using AWS Lambdas. Skilled in
        designing efficient database schemas tailored to project needs.
      </p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-3 gap-x-10 gap-y-10">
        {knowledgeItems.map((item, index) => (
          <KnowledgeCard
            key={index}
            icon={item.icon}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
};

export default MyKnowledge;
