import styled from 'styled-components';

export const StyledCreateBoardButton = styled.button`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 80px;
  padding: 8px;
  font-weight: 700;
  font-size: 14px;
  background: ${props => props.theme.primaryGrey};
  color: ${props => props.theme.secondaryGrey};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  box-sizing: content-box;
`
