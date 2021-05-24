import React from 'react'

export default function Todos({todos, clearTodo}) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => {
                return (
                    <li className="todo" key={index}>
                        {todo.todo} 
                        <button 
                            className="delete" 
                            onClick={() => clearTodo(todo.id)}>
                            X
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
