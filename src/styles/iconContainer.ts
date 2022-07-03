import styled from "styled-components";

const Container = styled.div`
  --gap: 8px;
  /* position: relative; */
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: center;
  padding: var(--gap);
  border-radius: 6px;
  /* background-color: #ffbc40; */
  /* background-color: ${props => props.theme.colorMain}; */
  /* box-shadow: 0 0 3px ${props => props.theme.colorShadow}; */
  transition: 
      color 0.125s;

  &:hover {
    /* color: #ffbc40; */
    cursor: pointer;
  }

  @media (min-width: 576px) {
    min-width: 0;
    width: 256px;
  }

`;


export { Container };
