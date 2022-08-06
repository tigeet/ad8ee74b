import styled from "styled-components";

// add padding props mb :?
interface LinkProps {
  width?: number;
  height?: number;
  fontSize: number;
  // label: string;
}

const Link = styled.div<LinkProps>.attrs((props: LinkProps) => ({
  width: (props.width === undefined) ? 'fit-content' : props.width + 'px',
  height: (props.height === undefined) ? 'fit-content' : props.height + 'px',

}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* height: 32px; */
  position: relative;
  border-radius: 4px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fontSize};

  &:hover {
    &::after {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    box-sizing: border-box;

    bottom: 0;
    content: '';
    background-color: ${props => props.theme.colorAccent};
    /* border-radius: 2px; */
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    /* transition: width 0.2s  ; */
    height: 3px;
  }
    /* background-color: ${(props) => props.theme.colorSelected}; */
  }

  @media (max-width: 576px) {
    width: 100%;  
    &:hover {
      &::after{
        display: none;
      }
    }
    /* position: relative; */
    /* top: 48px; */
    /* flex-direction: column; */
  }
`;


interface NavLinkProps {
  width?: number,
  height?:number,
  text: string,
  fontSize: number,
}



const NavLink = ({width, height, text, fontSize} : NavLinkProps) => {
  return <Link width={width} height={height} fontSize={fontSize}>{text}</Link>;
};

export { NavLink };

