import React, { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Todo from '../../Components/Todo';
import TodayDate from '../../Components/Date';
import NewFormTodo from '../../Components/NewFormTodo';
import './style.css'



const TodoList = () => {
    const todos = useStoreState(state => state.todos);
    const [addMode, setAddMode ] = useState(false);
    const [editMode, setEditMode ] = useState(false);
    const [date, setDate ] = useState( new Date());

    const addTodo = useStoreActions(action => action.addTodo);
    const updateTodo = useStoreActions(action => action.updateTodo);
    const deleteTodo = useStoreActions(action => action.deleteTodo);

  
    window.setInterval(function () {
        setDate(new Date())
    }, 1000);

    const handleToggleEditForm = (data) => {
        const dataCopy = {...data};
        dataCopy.editMode = !dataCopy.editMode;

        updateTodo(dataCopy);
        setEditMode(true);
    }

    const  handleUpdate = (data) => {
        updateTodo({...data, editMode: false});
    }

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    }

   const  openForm = () =>  {
        setAddMode(!addMode)
    }

    const handleAddToDo = (data) => {
        addTodo(data);
        setAddMode(false)
    }

    const todosBox = todos.map( todo => 
        <Todo 
            data = {todo} 
            key = {todo.id} 
            todosList = {todos}
            deleteTodo = {handleDeleteTodo}
            toggleEditForm = {handleToggleEditForm}
            updateTodo = {handleUpdate}
        />
    );

    return (
        <div className="todolist-root">
            <TodayDate date={date}/>
            <div className="todolist-list">
                {todosBox}
            </div>
            {addMode &&  <NewFormTodo handleSubmit={handleAddToDo}/>}
            <button className="btn" onClick={openForm}></button>
            
            <div className="wrapper">
                <div className="icon-search-container" data-ic-class="search-trigger">
                    <span className="fa fa-search"></span>
                    <input className="search-input" type="text" data-ic-class="search-input" placeholder="Search"/>
                    <span className="fa fa-times-circle" data-ic-class="search-clear"></span>
                </div>
            </div>
        </div>
    )

}

export default TodoList;