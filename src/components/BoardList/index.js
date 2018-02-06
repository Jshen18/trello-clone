import React, { Component } from 'react';
import { StyledBoardList, StyledBoardListItem, StyledBoardLink } from './styles';
import CreateBoard from '../CreateBoard';

class BoardList extends Component {
  render() {
    return (
      <div>
        <h2>My Boards</h2>
        <StyledBoardList>
          <StyledBoardListItem>
            <StyledBoardLink>
              <span>Todo</span>
            </StyledBoardLink>
          </StyledBoardListItem>
          <StyledBoardListItem>
            <StyledBoardLink>
              <span>Groceries</span>
            </StyledBoardLink>
          </StyledBoardListItem>
          <StyledBoardListItem>
            <StyledBoardLink>
              <span>Homework</span>
            </StyledBoardLink>
          </StyledBoardListItem>
          <StyledBoardListItem>
            <StyledBoardLink>
              <span>Poopoo</span>
            </StyledBoardLink>
          </StyledBoardListItem>
          <StyledBoardListItem>
            <CreateBoard />
          </StyledBoardListItem>
        </StyledBoardList>
      </div>

    );
  }
};

export default BoardList;
