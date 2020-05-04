import React, { Component } from 'react';
import { v4 as uuid } from 'uuid'

import './style.css'

class NewFormTodo extends Component {

    constructor(props){
        super(props)

        this.state = {
            name:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        const { name, id } = this.props;
        if(name) {
            this.setState({name, id})
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const { handleSubmit, id } = this.props;
        const data = {...this.state, id: id ? id : uuid()}

        handleSubmit(data);
        this.setState({name: ''})
    }

    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <label>Name: </label>
                <input 
                    id="todo-name"
                    name="name"
                    value={name}
                    placeholder="Enter todo name"
                    onChange={this.onChange}
                />
                <button>Enter</button>
            </form>
        )
    }
}

export default NewFormTodo;