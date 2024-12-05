import { createSlice } from "@reduxjs/toolkit"

export type TodoType = {
    id: number
    text: string
    completed: boolean
}
type TodoState = {
    counter: number
    list: TodoType[]
}

const initialState: TodoState = {
    counter: 0,
    list: [{ id: 0, text: "test todo", completed: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add_todo: (state, payload) => {
            debugger;
            state.counter += 1
            state.list.push({ id: state.counter, text: payload.payload.text, completed: false })
        },
        toggle_todo: (state, payload) => {
            state.list.forEach(a => {
                if (a.id === payload.payload) {
                    a.completed = !a.completed
                }
            })
        }
    }
})

export const { add_todo, toggle_todo } = todoSlice.actions

export default todoSlice.reducer