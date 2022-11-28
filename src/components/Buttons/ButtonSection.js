import React from 'react'
import { useSelector } from 'react-redux'

import { Plus } from '../Plus'
import { RadioButton } from './RadioButton'

export const ButtonSection = () => {

    const toggler = useSelector((state) => state.listData)
    return (
        <div className="h-auto w-full flex max-w-[800px] mx-auto py-3 justify-between flex-col mt-12 md:flex-row relative">
            <div className="flex">
                <p>Did you work out?</p>
                <RadioButton toggle={toggler.toggleWork.value} id="work" />

            </div>

            <div className="flex md:mr-24 mt-6 md:mt-0">
                <p>Did you stick your diet?</p>
                <RadioButton toggle={toggler.toggleDiet.value} id="diet" />

            </div>

            <div>
                {toggler.toggleWork.value && toggler.toggleDiet.value ? <Plus className="absolute right-0 top-[-1.7rem] sm:top-6 md:top-[0.3rem]" /> : null}

            </div>
        </div>
    )
}
