import React from 'react';
import {StoreProvider, createStore } from 'easy-peasy';

import myStore from './store';
import TodoList from './Layout/TodoList';
import './App.css';

const store = createStore(myStore);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <TodoList/>
      </div>
    </StoreProvider>
  );
}

export default App;
