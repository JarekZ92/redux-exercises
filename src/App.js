import React, { Component } from 'react';

import Counter from './Counter'
import CounterButtons from './Counter/CounterButtons'


class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <CounterButtons />
      </div>
    );
  }
}

export default App;
