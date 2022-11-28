import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import List from './List'

import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { AnimatePresence } from 'framer-motion'

import {IoCloseCircle} from "react-icons/io5"
import { ThingsInput } from './ThingsInput'

import { removeAll } from '../../features/inputData'
import { Plus } from '../Plus'



const Things = () => {

    const thingsRef = useRef(null)
    const itemList = useSelector((state) => state.listData.things)
    const [itemCount, setCount] = useState(0)

    const dispatch = useDispatch()

    const handleInputFocus = (e) => {
        thingsRef.current.focus()
    }

    const removeValues = () => {
        dispatch(removeAll())
    }

    return (
        <div className="input-container mx-auto mt-16 max-w-[800px] border-0 border-black">
            <div className='flex w-full h-auto items-center'>
                <p className="text-md font-sans w-[25rem]">What are 5 things you're grateful for?</p>
                <div className='relative flex items-center w-[20px] h-4 ml-auto mr-2 sm:mr-auto sm:ml-[-8rem]'>
                    {itemList.value?.length >= 5 ? <Plus className="absolute"/> : null}
                </div>

            </div>
            <div className="w-full rounded transition-all ease-in-out duration-200 mt-3 focus-within:outline focus-within:outline-focusBorder focus-within:outline-3">
                <div className="group w-full h-auto pb-7 overflow-hidden border-[1px] rounded border-bOutline items-center bg-white relative p-3 hover:border-hoverBorder transition-all ease-in-out duration-500 focus-within:border-hoverBorder cursor-text pr-8" onClick={handleInputFocus}>
                    <IoCloseCircle className='absolute top-2 right-2 text-white select-none pointer-events-none cursor-pointer transition-all ease-in-out group-hover:text-btnGrey group-hover:pointer-events-auto' onClick={removeValues}/>

                    <AnimatePresence>
                    {itemList.value.map((items, index) => {    
                        return <List key={index} items={items}/>
                    })}
                    </AnimatePresence>

                    <ThingsInput thingsRef={thingsRef} /> 

                </div>
            </div>


        </div>
    )
}

export default Things