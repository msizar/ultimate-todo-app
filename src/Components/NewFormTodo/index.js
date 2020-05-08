import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'

import './style.css'

const NewFormTodo = ({ name :currentName, id, handleSubmit}) => {
    const [name, setName] = useState('');

    //Component did mount
    useEffect(() => {
        if(currentName) setName(currentName);
    }, [currentName]);
    
    // submit form
    const onSubmit = (e) =>  {
        e.preventDefault();
        const data = { name, id: id ? id : uuid()}

        if(name === '') return;

        handleSubmit(data);
        setName('');
    }

    // Change todo item name
    function onChange (e) {
        setName(e.target.value)
    };

    return (
        <div className="form-root">
            <form onSubmit={onSubmit} className="form">
                <input 
                    id="todo-name"
                    name="name"
                    minLength={2}
                    value={name}
                    placeholder="Enter todo name"
                    onChange={onChange}
                />
                <button className="form-btnSave">Enter</button>
            </form>
        </div>
    );
}
export default NewFormTodo;