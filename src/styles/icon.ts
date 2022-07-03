import styled, { keyframes } from "styled-components";


const Icon = styled.img`
  aspect-ratio: 1/1;
  image-rendering: -webkit-optimize-contrast;
  width: 100%;
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
