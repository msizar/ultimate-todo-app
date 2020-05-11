import React from 'react';
import {StoreProvider, createStore } from 'easy-peasy';
import Particles from 'react-particles-js'

import myStore from './store';
import particlesConfig from './helpers/particels';
import TodoList from './Layout/TodoList';
import './App.css';

const store = createStore(myStore);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <TodoList/>
        <Particles 
        params={particlesConfig} 
      /> 
      </div>
    </StoreProvider>
  );
}

export default App;
