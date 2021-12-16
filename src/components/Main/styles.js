import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 150px;
  margin: 50px 0;

  background: ${props => props.theme.cardAdviceBackgroundColor};
  color: ${props => props.theme.textColor};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .container-button{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
    margin-top: 10px;
  }

  button{
    background: ${props => props.theme.mainBackgroundColor};
    color: ${props => props.theme.textColor};
    width: 60px;
    border: none;
    border-radius: 6px;
  }
`;