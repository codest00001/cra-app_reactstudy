import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

const TodoLists = () => {
    const [todos, setTodos] = useState([])
    const [newTodo,setNewTodo] = useState('')

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

        const deleteTodo = async (id, completed) => {
            try{
                await fetch(`http://localhost:4000/todos/${id}/check`,{
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({completed : !completed}),
                });


//전체 목록 다시 받아오기
fetchTodos();
    } catch(error) {
        console.error('Error updating todo:', error);
}
};

const addTodo = async()=>{
    if (newTodo.trim() === "") return;

    try {
        await fetch('http://localhost:4000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({task:newTodo}),
        });//전체목록 다시 받아오기
        fetchTodos();
        setNewTodo("");//입력필드초기화
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};


    return (
        <>
        <div><h1>To Do Lists</h1></div>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" />
               <button onClick={addTodo}>Add todo</button>
        <ul>
      {todos.map((todo) => {
        return (
         <li key = {todo._id}>
            {todo.completed ? <del>todo.task</del> : todo.task}
                <button onClick={() => {toggleCheckTodo(todo._id, todo.completed)}}>Complete</button>
                <button onClick={() => {deleteTodo(todo._id)}}>Delete</button>
                
        </li>
        )

      })}
      </ul>
        </>
    )
}

export default TodoLists;