import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './Counter'
import CounterButtons from './Counter/CounterButtons'
import counterReducer from './Counter/Store'

const reducers = combineReducers({
  counter: counterReducer
})

const store = createStore(reducers)


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <CounterButtons />
        </div>
      </Provider >
    );
  }
}

export default App;
