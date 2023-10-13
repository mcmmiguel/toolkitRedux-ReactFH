import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosAPI"


export const ToDoApp = () => {

    const [todoId, setTodoId] = useState(1);
    const { data: todo = [], isLoading } = useGetTodoByIdQuery(todoId);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    // console.log(todo);

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1)
    }

    return (
        <>
            <h1>ToDos - RTK Query</h1>
            <hr />
            <h4>isLoading... {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo}>Prev ToDo</button>
            <button onClick={nextTodo}>Next ToDo</button>
            {/* <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>
                            {todo.title}

                        </li>
                    ))
                }
            </ul> */}


        </>
    )
}
