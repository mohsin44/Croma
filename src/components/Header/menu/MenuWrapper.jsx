import React from 'react'
import { MenuData } from '../../../Data'
import { IoHandRight } from 'react-icons/io5'

const MenuWrapper = ({handleClose}) => {
  return (
    <div className="fixed top-[5rem] bottom-0 left-0 right-0 bg-[#393939] opacity-80"
    onClick={handleClose}
    >
        {MenuData.map((category)=>{
            return(
                <div className='p-2'>
                    <div className='flex justify-between'>{category.label}
                    <span><IoHandRight/></span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default MenuWrapper