import React, { Component } from 'react';
import { StyledBoardList, StyledBoardListItem, StyledContainer } from './styles';
import CreateBoard from '../CreateBoard';
import Link from '../Link';
import storage from '../../storage';

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

  renderBoards(boards) {
    return boards.map((board, index) => {
      return (
        <StyledBoardListItem key={index}>
          <Link to={`/boards/${board.id}`}>
            <span>{board.title}</span>
          </Link>
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
