"use client";

import About from "@/components/items/About";
import ExtraSkills from "@/components/items/ExtraSkills";
import Languages from "@/components/items/Languages";
import Profile from "@/components/items/Profile";
import ProgrammingLanguages from "@/components/items/ProgrammingLanguages";

const LeftSidebar = () => {
  return (
    <aside className="w-[305px] h-[4517px] left-0 top-0 flex justify-center items-start pt-10 bg-[var(--color-fondo)]">
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
