import { useDispatch } from "react-redux"
import { add_todo } from "./todoSlice"
import { useState } from "react";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()
  const addTodo = () => {
    if (!text) {
      return
    }
    dispatch(add_todo({ text: text }))
    setText('')

  }
  const handleChange = e => { setText(e.target.value) }
  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={addTodo} disabled={!text}> add a todo</button></form>
    </>
  )
}
export default TodoInput