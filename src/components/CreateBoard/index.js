import React, { Component, Fragment } from 'react';
import { StyledCreateBoardButton } from './styles';
import CreateBoardForm from './CreateBoardForm';


class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  render() {
    return (
      <Fragment>
        {
          this.state.displayForm ? 
          <CreateBoardForm toggleForm={this.toggleForm} createBoard={this.props.createBoard}/> :
          <StyledCreateBoardButton
            onClick={this.toggleForm}
          >
            Create new board...
          </StyledCreateBoardButton>
        }
      </Fragment>
    )
  }
}

export default CreateBoard;
