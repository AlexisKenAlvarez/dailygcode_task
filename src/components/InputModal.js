import React, { useState, useEffect, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { useSelector } from 'react-redux';

import { Plus } from './Plus';

export const InputModal = ({label, className, id, mLeft}) => {
    const itemList = useSelector((state) => state.listData)
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
      setName(id)

    }, [])

    const handleFocus = () => {
        inputRef.current.focus()
    }
    

    return (
        <div className={`input-container mx-auto max-w-[800px] border-0 border-black ${className}`} onClick={handleFocus}>
            <div className='flex w-full h-auto items-center'>
                <p className="text-md font-sans w-[25rem]">{label}</p>
                <div className={`relative flex items-center w-[20px] h-4 ml-auto mr-2 sm:mr-auto ${mLeft}`}>
                    {name !== 'lesson' ? value.length > 0 ? <Plus className="absolute"/> : null : null}
                </div>
            </div>
            <div className="w-full h-auto rounded transition-all ease-in-out duration-200 mt-3 focus-within:outline focus-within:outline-focusBorder focus-within:outline-3">
                <div className="group w-full h-auto overflow-hidden border-[1px] rounded border-bOutline items-center bg-white relative py-2 pl-2 hover:border-hoverBorder transition-all ease-in-out duration-500 focus-within:border-hoverBorder cursor-text">
                    {/* <textarea className='w-full h-10 m-0 p-0 outline-none' style={{resize: "none"}}></textarea> */}
                    <TextareaAutosize className='w-full outline-none h-12 m-0 pr-3 pb-4' minRows={1} maxRows={4} style={{resize: "none"}} onChange={handleChange} ref={inputRef}/>
                </div>
            </div>
        </div>
    )
}
