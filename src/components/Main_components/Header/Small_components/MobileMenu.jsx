import React from 'react'
import { IoMenuOutline } from 'react-icons/io5'

const MobileMenu = () => {
  return (
      <div className="flex items-center text-xs font-semibold cursor-pointer md:hidden mr-2">
        <IoMenuOutline className="text-3xl"/>
      </div>
    
  )
}

export default MobileMenu