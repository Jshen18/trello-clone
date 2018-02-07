import React, { Component } from 'react';
import { StyledCreateForm, StyledFormHeader, StyledFormContent, StyledTextInput, StyledSubmitInput, StyledLabelInput } from './styles';

class CreateBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createBoard({
      title: this.state.title
    });
    this.setState({
      title: ''
    });
  }

  render() {
    return (
      <StyledCreateForm onSubmit={this.handleSubmit}>
        <StyledFormHeader>
          <span>Create Board</span>
          <button onClick={this.props.toggleForm}>X</button>
        </StyledFormHeader>
        <StyledFormContent>
          <StyledLabelInput>Title</StyledLabelInput>
          <StyledTextInput
            value={this.state.title}
            onChange={this.handleInput}
            placeholder="Like 'Todo List'..."
            type="text"
          />
          <StyledSubmitInput type="submit" value="Create" />
        </StyledFormContent>
      </StyledCreateForm>
    )
  }

}

export default CreateBoardForm;
