type EducationItemProps = {
  institution: string
  degree: string
  location: string
  dates: string
  role?: string
  description: string
}

const EducationItem = ({
  institution,
  degree,
  location,
  dates,
  role = "Student",
  description
}: EducationItemProps) => {
  return (
    <div className="flex justify-between py-10 border-b border-gray-200 gap-6 flex-wrap md:flex-nowrap">
      {/* Izquierda */}
      <div className="flex flex-col gap-2 min-w-[200px] max-w-[240px]">
        <h3 className="text-lg font-semibold text-[var(--color-darktext)]">{institution}</h3>
        <span className="text-sm text-[var(--color-graytext)]">{role}</span>
        <div className="inline-block mt-2">
          <span className="bg-[var(--color-accent)] text-white text-xs font-medium px-2 py-1 rounded">
            {dates}
          </span>
        </div>
      </div>

      {/* Centro */}
      <div className="flex-1 min-w-[250px] max-w-[600px]">
        <h4 className="text-base font-medium text-[var(--color-darktext)] pb-6">
          {degree}
        </h4>
        <p className="text-sm text-[var(--color-graytext)] leading-6">
          {description}
        </p>
      </div>

    </div>
  )
}

export default EducationItem
