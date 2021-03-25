import React from 'react';

const Input = () => {
    const onSubmit = (e) => {
        console.log("on submit clicked");
        console.log(e.target.inputText.value);
        console.log(e.target.deadline.value);
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