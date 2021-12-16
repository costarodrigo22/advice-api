import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.mainBackgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;

  .content{
    background: ${props => props.theme.mainBackgroundColor};
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;