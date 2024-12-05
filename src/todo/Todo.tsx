import { useDispatch } from "react-redux"
import { TodoType, toggle_todo as toggle_todo } from "./todoSlice"

type Props = {
    todo: TodoType
}
function Todo({ todo }: Props) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggle_todo(todo.id))
    }
    return (
        <div>
            <div>{todo.text}</div>
            <button onClick={handleClick}>{todo.completed ? 'done' : 'todo'}</button>
        </div>

    )
}
export default Todo