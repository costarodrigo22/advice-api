import styled from 'styled-components';

export const Container = styled.footer`
  background: ${props => props.theme.footerbackgroundColor};
  color: ${props => props.theme.textColor};
  width: 100%;
  height: 90px;
  padding: 20px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

`;