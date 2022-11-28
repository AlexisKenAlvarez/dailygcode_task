import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { addThings, popValue } from '../../features/inputData'
import { useSelector, useDispatch } from 'react-redux'

export const ThingsInput = ({ thingsRef }) => {
    const [value, setValue] = useState('')
    const [thingsWidth, setWidth] = useState(null)
    const [widthChange, setWChange] = useState(false)
    const spanRef = useRef(null)

    const dispatch = useDispatch()
    const itemList = useSelector((state) => state.listData.things)


    useEffect(() => {
        if (thingsWidth === null || thingsWidth === 0) {
            setWidth(10)
        }

    }, [widthChange])

    useLayoutEffect(() => {
        if (thingsWidth === null || thingsWidth === 0) {
            setWidth(10)
        } else {
            setWidth(spanRef.current.offsetWidth)
            setWChange((current) => !current)

        }
    }, [value])


    const handleInput = (e) => {
        setValue(e.target.value)

    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (value !== '') {
                dispatch(addThings({ value: value }))
                setValue('')
            }
                
        } else if (e.keyCode === 8) {
            if (itemList.value.length > 0) {
                if ((value.length) <= 0) {
                    dispatch(popValue())
                }
            }

        }
    }


    return (
        <li className="float-left max-w-full list-none">
            <p className="absolute top-0 left-0 opacity-0 font-sans w-fit whitespace-pre" ref={spanRef}>{value}</p>
            <input type="textbox" name="tags" className=" font-sans outline-none text-inpCol max-w-full"
                autoComplete="off"
                value={value}
                onChange={handleInput}
                ref={thingsRef}
                onKeyDown={handleKeyDown}
                style={{ width: `${thingsWidth}px` }}>
            </input>
        </li>
    )
}
