import { useSelector } from "react-redux"
import { RootState } from "./store"
import Todo from "./Todo"

function TodoList() {
    const list = useSelector((state: RootState) => state.todos)


    list.list
    return (
        <div>
            {list.list.map(a => (<Todo key={a.id} todo={a}></Todo>))}
        </div>
    )
}
export default TodoList
