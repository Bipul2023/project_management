import React from 'react'
import { Link } from 'react-router'

const SideBarListItem = ({children, to}) => {
  return (
    <Link to={to} className='sideBarListItem relative z-[0] flex flex-wrap gap-x-4 px-3 py-2  rounded-[10px] border border-transparent hover:border hover:border-gray-400'>{children}</Link>
  )
}

export default SideBarListItem