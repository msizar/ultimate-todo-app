import { action } from 'easy-peasy';

export default {
    todos: [],

    addTodo: action ((state, todo ) => {
        state.todos = [...state.todos, todo]
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