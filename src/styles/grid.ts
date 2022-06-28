import styled from "styled-components";

const Grid = styled.div`
  /* width: fit-content; */
  display: grid;
  gap: 24px;
  transition: background-color 0.3s;
  
  /* grid-template-columns: 1fr; */


  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridWrapper = styled.div`
  width: 100%;
  /* height: fit-content; */
  display: flex;
  justify-content: center;
  padding: 16px;
`

export {Grid, GridWrapper}
