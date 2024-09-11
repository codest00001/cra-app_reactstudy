import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

const TodoLists = () => {
    const [todos, setTodos] = useState([])

// 서버에서 모든 todo 가져오기
const fetchTodos = async () => {
    try {
        const response = await fetch('http://localhost:4000/todos');
        const data = await response.json();
        console.log(data)
       setTodos(data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

useEffect(() => {
    fetchTodos();
}, []);

const toggleCheckTodo = async (id, completed) => {
    try{
        await fetch(`http://localhost:4000/todos/${id}/check`,{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({completed : !completed}),
        });
//전체목록 다시 받아오기
fetchTodos();
    } catch(error) {
        console.error('Error updating todo:', error);
}
};



    return (
        <>
        <ul>
      {todos.map((todo) => {
        return (
         <li key = {todo._id}>
            {todo.completed ? <del>todo.task</del> : <del>todo.task</del>}
                <button onClick={() => {toggleCheckTodo(todo._id, todo.completed)}}>Complete</button>
        </li>
        )

      })}
      </ul>
        </>
    )
}

export default TodoLists;
