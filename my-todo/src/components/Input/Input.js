import React from 'react';

const Input = () => {
    const onSubmit = (e) => {
        console.log("on submit clicked");
        const task = e.target.inputText.value;
        const deadline = e.target.deadline.value;
        const active = true;
        const data = {task, deadline, active}
        fetch('http://localhost:8888/createTodo', {
            method:'POST',
            body:JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => console.log(data.message))
        e.target.inputText.value = "";
        e.target.deadline.value = "";
        e.preventDefault();
    }
    return (
        <div className="head">
            <form onSubmit={onSubmit}>
                <input type="text" name="inputText" placeholder="Add your task here"/>
                <br/>
                <input type="text" name="deadline" placeholder="Deadline"/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Input;