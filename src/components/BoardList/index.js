import React, { Component } from 'react';
import { StyledBoardList, StyledBoardListItem, StyledBoardLink } from './styles';

class BoardList extends Component {
  render() {
    return (
      <div>
        <h2>My Boards</h2>
        <StyledBoardList>
          <StyledBoardListItem>
            <StyledBoardLink>
              <span>Create a new board...</span>
            </StyledBoardLink>
          </StyledBoardListItem>
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
        </StyledBoardList>
      </div>

    );
  }
};

export default BoardList;