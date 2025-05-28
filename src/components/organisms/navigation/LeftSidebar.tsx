"use client";

import About from "@/components/molecules/About";
import ExtraSkills from "@/components/molecules/ExtraSkills";
import Languages from "@/components/molecules/Languages";
import Profile from "@/components/molecules/Profile";
import ProgrammingLanguages from "@/components/molecules/ProgrammingLanguages";

const LeftSidebar = () => {
  return (
    <aside className="w-[305px] h-huge left-0 top-0 flex justify-center items-start pt-10 bg-[var(--color-fondo)]">
      {/* Contenedor interno */}
      <div className="w-[305px] h-[1315px] flex flex-col items-center gap-[10px]">
        {/* Sección de perfil */}
        <Profile />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* About Info */}
        <About />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* Lenguajes */}
        <Languages />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* Lenguajes de programacion */}
        <ProgrammingLanguages />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />

        {/* Extra Skills */}
        <ExtraSkills />

        {/* Línea separadora */}
        <div className="w-[220px] border-b-[1.5px] border-grayline my-2" />
      </div>
    </aside>
  );
};

export default LeftSidebar;
