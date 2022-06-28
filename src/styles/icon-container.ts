import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  /* background-color: #ffbc40; */
  background-color: ${props => props.theme.colorMain};
  box-shadow: 0 0 3px ${props => props.theme.colorShadow};
  transition: 
      background-color 0.3s,
      color 0.125s;

  &:hover {
    /* color: #ffbc40; */
    cursor: pointer;
  }

`;


export { Container };
