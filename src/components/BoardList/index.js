import React, { Component } from 'react';
import { StyledBoardList, StyledBoardListItem, StyledBoardLink, StyledContainer } from './styles';
import CreateBoard from '../CreateBoard';
import storage from '../../storage';
import history from '../../history';

const BOARDS_KEY = 'boards'

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    }
    this.createBoard = this.createBoard.bind(this);
    this.syncWithLocalStorage = this.syncWithLocalStorage.bind(this);
  }

  syncWithLocalStorage() {
    this.setState({
      boards: storage(localStorage).get(BOARDS_KEY) || []
    });
  }

  onTransition(event) {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
  }

  renderBoards(boards) {
    return boards.map((board, index) => {
      return (
        <StyledBoardListItem key={index}>
          <StyledBoardLink onClick={this.onTransition} href={`/boards/${board.id}`}>
            <span>{board.title}</span>
          </StyledBoardLink>
        </StyledBoardListItem>
      );
    })
  }

  createBoard(board) {
    this.setState({
      boards: [...this.state.boards, board]
    });
  }

  componentDidUpdate() {
    storage(localStorage).set(BOARDS_KEY, this.state.boards);
  }

  componentDidMount() {
    this.syncWithLocalStorage()
  }

  render() {
    const { boards } = this.state;
    return (
      <StyledContainer>
        <h2>My Boards</h2>
        <StyledBoardList>
          { this.renderBoards(boards) } 
          <StyledBoardListItem>
            <CreateBoard createBoard={this.createBoard}/>
          </StyledBoardListItem>
        </StyledBoardList>
      </StyledContainer>
    );
  }
};

export default BoardList;
