import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Boards from '../Boards';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Boards />
      </Fragment>
    );
  }
}

export default App;
