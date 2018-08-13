import React, { Component } from 'react';

import Counter from './Counter'


class App extends React.Component {
  render() {
    return (
      <div>
        <Counter value={6} />
      </div>
    );
  }
}

export default App;
