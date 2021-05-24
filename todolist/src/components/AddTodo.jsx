 const AddTodo = ({addTodo, newTodo, handleTodoChange}) => {
    return (
        <div>
            <form onSubmit={addTodo} >
                <input className="todo-input" type="text" placeholder="Todo..." value={newTodo} onChange={handleTodoChange}/>
                <input className="add-btn" type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddTodo;
