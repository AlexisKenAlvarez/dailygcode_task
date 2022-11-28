import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    things: {
        value: []
    },
    toggleWork: {
        value: false
    },
    toggleDiet: {
        value: false
    },
    wins: {
        value: ''
    },
    focus: {
        value: ''
    },
    lesson: {
        value: ''
    }

}

export const dataInput = createSlice({
    name: "DailyGCode",
    initialState,
    reducers: {
        addThings: (state, action) => {
            if (state.things.value.includes(action.payload.value)) {
                const temp = state.things.value.filter((items) => items !== action.payload.value)
                state.things.value = temp
            } else {
                state.things.value.push(action.payload.value)
            }
        }, 
        removeThings: (state, action) => {
            const temp = state.things.value.filter((items) => items !== action.payload.value)
            state.things.value = temp
        },
        setWork: (state, action) => {
            state.toggleWork = action.payload
        },
        setDiet: (state, action) => {
            state.toggleDiet = action.payload
        },
        popValue: (state, action) => {
            const tempValue = state.things.value
            state.things.value.pop()
            state.things.value = tempValue
        },
        removeAll: (state, action) => {
            const empty = []
            state.things.value = empty
        }
    }
})

export const { addThings, removeThings, setWork, setDiet, popValue, removeAll } = dataInput.actions
export default dataInput.reducer
