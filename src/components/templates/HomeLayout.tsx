import React from 'react'
import LeftSidebar from '../organisms/navigation/LeftSidebar'
import RightMenu from '../organisms/navigation/RightMenu'

type Props = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex bg-dark text-white h-hug">
      <LeftSidebar />
      <main className="flex-1">{children}</main>
      <RightMenu />
    </div>
  )
}

export default HomeLayout
