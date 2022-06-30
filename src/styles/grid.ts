import styled from "styled-components";


interface GridProps {
  scrollable: boolean,
}


const Grid = styled.div`
  width: fit-content;
  display: grid;
  gap: 16px;
  transition: background-color 0.3s;
  /* height: 100%; */
  grid-template-columns: 1fr;


  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridWrapper = styled.div`
  width: 100%;
  height: ${(props: GridProps) => props.scrollable ? 'unset' : '100%' };
  overflow: ${(props: GridProps) => props.scrollable ? 'unset' : 'hidden' };
  transition: background-color 0.3s;
  /* height: 100%; */
  /* height: fit-content; */
  display: flex;
  justify-content: center;
  padding: 24px 12px;
`

export {Grid, GridWrapper}
