import styled from 'styled-components';

export const StyledNav = styled.nav`
  background: ${props => props.theme.primaryColor};
  height: 30px;
  padding: 5px 8px;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  text-align: center;
  color: ${props => props.theme.primaryFontColor};
`;
