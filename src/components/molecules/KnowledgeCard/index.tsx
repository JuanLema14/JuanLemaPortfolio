import { ReactNode } from 'react'

type KnowledgeCardProps = {
  icon: ReactNode
  title: string
  caption: string
}

const KnowledgeCard = ({ icon, title, caption }: KnowledgeCardProps) => {
  return (
    <div className="w-[310px] h-[225px] bg-[var(--color-fondo)] flex flex-col items-center justify-start pt-6 px-4">
      <div className="w-[68px] h-[68px] mb-6 text-[var(--color-accent)] flex items-center justify-center text-4xl">
        {icon}
      </div>
      <h4 className="text-[18px] leading-[124%] font-medium text-[var(--color-darktext)] mb-1">
        {title}
      </h4>
      <p className="text-[15px] leading-[24px] text-[var(--color-graytext)] capitalize text-center">
        {caption}
      </p>
    </div>
  )
}

export default KnowledgeCard
