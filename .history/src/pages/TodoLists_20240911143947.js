import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

const TodoLists = () => {
    const [todos, setTodos] = useState([])

// 서버에서 모든 todo 가져오기
const fetchTodos = async () => {
    try {
        const response = await fetch('http://localhost:4000/todos');
        const data = await response.json();
       setTodos(data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

useEffect(() => {
    fetchTodos();
}, []);

    return (
        <>
        <ul>
      {todos.map((todo) => {
           return <li>아무거나</li>
      })}
      </ul>
        </>
    )
}

export default TodoLists;
