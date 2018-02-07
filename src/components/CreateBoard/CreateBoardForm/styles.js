import styled from 'styled-components';

export const StyledCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 0 7px 7px;
  border: 1px solid ${props => props.theme.borderGrey};
`;

export const StyledFormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 0 10px;
  border-bottom: 1px solid ${props => props.theme.borderGrey};

  position: relative;

  > button {
    padding: 8px;
    border: none;
    font-size: ${props => props.theme.baseFontSize};
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;

export const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const StyledLabelInput = styled.label`
  margin-bottom: 6px;
  font-weight: 700;
`

export const StyledTextInput = styled.input`
  padding: 7px;
  margin-bottom: 12px;
  background-color: ${props => props.theme.primaryGrey};
  font-size: ${props => props.theme.baseFontSize};
  border: 1px solid ${props => props.theme.secondaryGrey};
  border-radius: 3px;

  &:focus {
    background-color: #FFF;
  }
`;

export const StyledSubmitInput = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 30px;
  font-size: 15px;
  border-radius: 3px;
  background-color: #4ba035;
  color: #FFF;
  cursor: pointer;

  &:hover {
    background-color: #50ac39;
  }
`