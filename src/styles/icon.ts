import styled, { keyframes } from "styled-components";


const Icon = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  transition: 
    background-color 0.3s, 
    transform 0.125s;

  &:hover {
    transform: scale(1.2);
    z-index: 100;
  }


  @media (min-width: 576px) {
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
