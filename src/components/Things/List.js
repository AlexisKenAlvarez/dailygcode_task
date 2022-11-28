import React from 'react'

import { MdClose } from "react-icons/md"
import { useDispatch } from "react-redux"
import { removeThings } from '../../features/inputData'
import { motion } from 'framer-motion'

const List = (props) => {

    const dispatch = useDispatch()
    const handleRemove = (e) => {
        const id = e.currentTarget.id
        dispatch(removeThings({ value: id }))
    }

    return (
        <motion.li initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className="rounded bg-[#fafafa] w-fit h-auto list-none py-[0.1rem] px-2 border-[0.1px] border-[#eaeaea] flex items-center justify-center mr-1 float-left select-none cursor-default">
            {props.items}
            <MdClose className="ml-1 mt-[0.1rem] cursor-pointer text-[#898989] hover:text-black transition-all ease-in-out" id={props.items} onClick={handleRemove} />
        </motion.li>
    )
}

export default List