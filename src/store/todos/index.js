import { action } from 'easy-peasy';

const todoInit = {
    isDone: false,
    editMode: false,
}

export default {
    todos: [],

    addTodo: action ((state, todo ) => {
        const newTodo = {...todo, todoInit}
        state.todos.unshift(newTodo);
    }),

    deleteTodo: action((state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id );
    }),

    updateTodo: action((state, updatedTodo) => {
        const currentTodos = [...state.todos];

        state.todos = currentTodos.map(todo => {
            let currentTodo = {...todo};
            
            if(todo.id === updatedTodo.id ) currentTodo = {...updatedTodo};

            return currentTodo;
        });

    }),
}