import React, { Component } from 'react';

import './style.css'

import Todo from '../../Components/Todo';
import NewFormTodo from '../../Components/NewFormTodo';

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state = { todos: [] }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
    }

    
    handleSubmit(data) {
        const { todos } = this.state;
        const todosCopy = [...todos, data];
        
        this.setState({todos: todosCopy})
    }

    removeHandler(id) {
        const { todos } = this.state
        const todosCopy = todos;

        todosCopy.forEach((todo, i) => {
            if(todo.id === id ){
                todosCopy.splice(i, 1)
            }
        })

        this.setState({ todos : todosCopy})

    }

    editHandler(id) {

        const { todos } = this.state
        const todosCopy = todos;

        todosCopy.forEach((todo, i) => {
            if(todo.id === id ){
                todo.editMode = true;
            }
            console.log(todo)

        })

        this.setState({ todos : todosCopy})
        
    }

    handleUpdate(data) {
        const { todos } = this.state;
        const todosCopy = [...todos];

        const updatedTodos = todosCopy.map(todo => {

            if(todo.id === data.id ){
                todo.name = data.name;
                todo.editMode = false;
            }
            return todo;
        });


        this.setState({ todos: updatedTodos})

    }

    render(){
        const { todos } = this.state;

        const todosBox = todos.map( todo => 
                <Todo 
                    name = {todo.name} 
                    id = {todo.id} 
                    key = {todo.id} 
                    todosList = {todos}
                    removeTodo = {this.removeHandler}
                    handleUpdate = {this.handleUpdate}
                    editMode = {todo.editMode}
                    editTodo = {this.editHandler}
                />
            )

        return (
            <div>
                <h1>Todo List</h1>
                {todosBox}
                <NewFormTodo handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default TodoList;