'use client'

import EducationItem from '../../items/EducationItem'

const Education = () => {
  return (
    <section className="w-[970px] mx-auto flex flex-col items-center text-center py-20">
      <h2 className="text-[32px] leading-[124%] font-bold text-[var(--color-darktext)]">
        Education
      </h2>

      <p className="mt-4 text-[15px] leading-[24px] font-normal text-[var(--color-graytext)] w-[70%]">
        Throughout my professional education, I have acquired strong skills in development, solution design, and process optimization. This stage has been fundamental in building the technical and analytical foundations that I use today to face challenges in the software development world.
      </p>

      <div className="mt-12 w-full text-left bg-[var(--color-fondo)] p-6">
        <EducationItem
          institution="Universidad de Antioquia"
          degree="Systems Engineering"
          dates="February 2017 – Present"
          description="During this program, I have gained skills in programming, software architecture, data analysis, and agile methodologies. I have also strengthened my abilities in logical thinking, problem-solving, interface design, and process optimization—knowledge that I apply directly to my current projects."
        />
      </div>
    </section>
  )
}

export default Education
