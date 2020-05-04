import React, { Component } from 'react';

import Todo from '../../Components/Todo';
import TodayDate from '../../Components/Date';
import NewFormTodo from '../../Components/NewFormTodo';
import './style.css'

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state = { todos: [], addMode: false }
       

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.removeHandler = this.removeHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.openForm = this.openForm.bind(this);
    }

    componentDidMount() {
        window.setInterval(function () {
           this.setState({ date : new Date()})
        }.bind(this), 1000);
    }

    

    
    handleSubmit(data) {
        const { todos } = this.state;
        const todosCopy = [...todos, data];
        this.setState({todos: todosCopy, addMode: false})
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

        todosCopy.forEach((todo) => {
            if (todo.id === id) todo.editMode = true;
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

    openForm() {
        this.setState({ addMode: !this.addMode})
    }

    render(){
        const { todos, date, addMode } = this.state;
 
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
            );

        return (
            <div className="todolist-root">
                <TodayDate date={date}/>
                <div className="todolist-list">
                    {todosBox}
                </div>
                {addMode &&  <NewFormTodo handleSubmit={this.handleSubmit}/>}
                <button className="btn" onClick={this.openForm}></button>
            </div>
        )
    }
}

export default TodoList;