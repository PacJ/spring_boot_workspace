import { useSelector } from 'react-redux';
import { deleteAction, updateAction } from '../reduxs/action';

const Label = ({todo}) => {
    const todos = useSelector((todos) => todos);

    const deleteTodo = (id) => {
        deleteAction(id);
    };

    const updateTodo = async (id) => {
        const completed = todos.filter((todo) => todo.id === id)[0].completed;
        updateAction(id, completed);
    };

    return (
        <h3>
            {/* <label className={todo.completed === 1 ? 'completed' :null} onClick={() => updateTodo(todo.id)}> */}
            {/* {todo.todoname}</label> */}
            {/* <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label> */}

            <label className={todo.completed === 1 ? 'completed' :null} onClick={() => updateTodo(todo.id)}>
            {todo.todoname}</label>
            <label onClick={() => deleteTodo(todo.id)}>&nbsp;&nbsp;삭제</label>
        </h3>
    );
};

export default Label;