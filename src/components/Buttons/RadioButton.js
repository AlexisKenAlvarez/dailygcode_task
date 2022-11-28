import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWork, setDiet } from '../../features/inputData'
import { motion } from 'framer-motion'

import "../../styles/styles.css"

export const RadioButton = (props) => {

    const dispatch = useDispatch()
    const toggler = useSelector((state) => state.listData)

    const [toggle, setToggle] = useState(false)
  
    const handleButton = () => {
        if (props.id === "diet") {
            dispatch(setDiet({ value: !toggler.toggleDiet.value}))
        } else {
            dispatch(setWork({ value: !toggler.toggleWork.value}))
        }
    }

    const ripple = {
        start: {
            border: "0px"
        },
        play: {
            outline: [
                "2px solid rgba(66, 170, 255, 0.4)",
                "3px solid rgba(66, 170, 255, 0.3)",
                "4px solid rgba(66, 170, 255, 0.2)",
                "5px solid rgba(66, 170, 255, 0.15)",
                "5px solid rgba(66, 170, 255, 0.1)",
                "5px solid rgba(66, 170, 255, 0)",
            ],
            transition: {
                duration: 0.4
            }
        },
        playAgain: {
            outline: [
                "2px solid rgba(66, 170, 255, 0.4)",
                "3px solid rgba(66, 170, 255, 0.3)",
                "4px solid rgba(66, 170, 255, 0.2)",
                "5px solid rgba(66, 170, 255, 0.15)",
                "5px solid rgba(66, 170, 255, 0.1)",
                "5px solid rgba(66, 170, 255, 0)",
            ],
            transition: {
                duration: 0.4
            }
        }
    }

    return (
        <motion.div variants={ripple} animate={props.toggle ? "play" : "playAgain"} className="w-14 h-6 bg-disableCol ml-auto rounded-full flex items-center cursor-pointer relative sm:ml-6" onClick={handleButton} style={props.toggle ? { backgroundColor: "#1890ff" } : { backgroundColor: "#b8b8b8" }}>
            <div className="rounded-full w-5 h-5 bg-white ml-[2.5px] transition-all ease-[cubic-bezier(.37,.71,.71,.27)] duration-300" style={props.toggle ? { transform: "translateX(150%)" } : { transform: "translateX(0%)" }} ></div>

            <div className="absolute text-white flex justify-between items-center text-sm select-none w-full">
                <p className="ml-2" style={props.toggle ? { opacity: '1' } : { opacity: '0' }}>Yes</p>
                <p className="mr-2" style={props.toggle ? { opacity: '0' } : { opacity: '1' }}>No</p>
            </div>
        </motion.div>
    )
}
