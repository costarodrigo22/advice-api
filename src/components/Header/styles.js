import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.headerBackgroundColor};
  color: ${props => props.theme.textColor};
  width: 100%;
  height: 90px;
  padding: 20px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    background: transparent;
    border: none;  
  }
  
`;