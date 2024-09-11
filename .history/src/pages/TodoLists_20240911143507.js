import {Link} from 'react-router-dom'
import {useEffect} from 'react';

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
        현재는 투두리스츠 상태입니다 <br/>
        <Link to="/">go to home</Link>
        </>
    )
}

export default TodoLists;
