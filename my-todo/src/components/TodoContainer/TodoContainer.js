import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/loadAllData')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, []);
    console.log(todos);
    return (
        <div className="head">
            <h3>This is todo container</h3>
            {
                todos.map(todo => <Todo></Todo>)
            }
        </div>
    );
};

export default TodoContainer;