'use client'

import EducationItem from '../../items/EducationItem'

const Education = () => {
  return (
    <section className="w-[970px] mx-auto flex flex-col items-center text-center py-20">
      <h2 className="text-[32px] leading-[124%] font-bold text-[var(--color-darktext)]">
        Educación
      </h2>

      <p className="mt-4 text-[15px] leading-[24px] font-normal text-[var(--color-graytext)] w-[70%]">
        A lo largo de mi formación profesional he adquirido habilidades sólidas en desarrollo, diseño de soluciones y optimización de procesos. Esta etapa ha sido fundamental para adquirir las bases técnicas y analíticas con las que hoy enfrento desafíos en el mundo del desarrollo de software.
      </p>

      <div className="mt-12 w-full text-left bg-[var(--color-fondo)] p-6">
        <EducationItem
          institution="Universidad de Antioquia"
          degree="Ingeniería de Sistemas"
          location="Rionegro, Colombia"
          dates="Febrero 2017 – Presente"
          description="Durante este programa he adquirido habilidades en programación, arquitectura de software, análisis de datos y metodologías ágiles. También he fortalecido mis competencias en pensamiento lógico, resolución de problemas, diseño de interfaces y optimización de procesos, conocimientos que aplico directamente en mis proyectos actuales."
        />
      </div>
    </section>
  )
}

export default Education
