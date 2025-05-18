import React from 'react'
import LeftSidebar from '../frames/navigation/LeftSidebar'
import RightMenu from '../frames/navigation/RightMenu'

type Props = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex bg-dark text-white h-hug">
      <LeftSidebar />
      <main className="flex-1 px-6 py-4">{children}</main>
      <RightMenu />
    </div>
  )
}

export default HomeLayout
