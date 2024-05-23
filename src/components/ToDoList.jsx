import { useDispatch, useSelector } from 'react-redux';
import { createToDo, deleteToDo, editToDo } from '../stores/toDoSlice';

function DisplayToDo (props)
{
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteToDo({id: props.item.id}))
    }
    const handleEdit = () => {
        const newToDo = prompt("Enter an Updated todo", props.item.task)
        dispatch(editToDo({id: props.item.id, task : newToDo}))
    }
    return (
        <div>
            <span>{props.item.task}</span>&nbsp;
            <button onClick={handleEdit}>Edit</button>&nbsp;
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default function TodoList(props)
{
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const handleAdd = () => {
        const newToDo = prompt("Enter a new todo")
        dispatch(createToDo({task : newToDo}))
    }

    return (
        <>
        <div>
        {todos.map((todo) => (
           <DisplayToDo item={todo} key={todo.id}/>
        ))}
        </div>
        <div>
            <button onClick={handleAdd}>Add to Do</button>
        </div>
        </>
    )
}