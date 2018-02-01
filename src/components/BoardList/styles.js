import styled from 'styled-components';

export const StyledBoardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StyledBoardListItem = styled.li`
  width: 25%;
  height: 120px;
`;

export const StyledBoardLink = styled.a`
  display: flex;
  width: 250px;
  height: 80px;
  padding: 8px;
  background: ${props => props.theme.secondaryColor};
  font-weight: 700;
  color: ${props => props.theme.primaryFontColor};
  border-radius: 3px;
  cursor: pointer;
`
