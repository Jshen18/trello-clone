import React, { Component, Fragment } from 'react';
import Header from '../Header';
import BoardList from '../BoardList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BoardList />
      </Fragment>
    );
  }
}

export default App;
