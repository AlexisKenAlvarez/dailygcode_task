import React from 'react'

import { IoChevronForwardOutline } from "react-icons/io5";

export const Submit = () => {
  return (
    <>
        <div className='group mx-auto max-w-[795px] bg-[#e7040f] w-full h-10 mt-10 rounded flex items-center justify-center text-white font-sans cursor-pointer transition-all ease-in-out hover:bg-[#f6f6f6] select-none'>
            <div className='flex items-center justify-center w-[99.5%] h-[94%] bg-submitBorder transition-all ease-in-out group-hover:bg-submitHover rounded'>
                <p>Save Entry</p>
                <IoChevronForwardOutline className='ml-2 text-lg'/>
            </div>

        </div>
    </>
  )
}
