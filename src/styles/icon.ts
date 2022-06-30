import styled, { keyframes } from "styled-components";


const Icon = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  /* min-width: 100vw; */
  transition: 
    transform 0.125s;

  &:hover {
    transform: scale(1.2);
  }


  @media (min-width: 576px) {
    min-width: 0;
    width: 256px;
  }

  
`;

const IconWrapper = styled.div`
  overflow: hidden;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
`;


export {Icon, IconWrapper}
