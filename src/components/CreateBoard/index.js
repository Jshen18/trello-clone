import React, { Component } from 'react';
import { StyledCreateBoardButton } from './styles';


class CreateBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledCreateBoardButton>
        Create new board...
      </StyledCreateBoardButton>
    )
  }
}

export default CreateBoard;
