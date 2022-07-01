import styled from "styled-components";

interface LinkProps {
  width: number;
  height: number;
  // label: string;
}

const Link = styled.div<LinkProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  /* height: 32px; */
  border-radius: 4px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.colorSelected};
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 24px;
    /* position: relative; */
    /* top: 48px; */
    /* flex-direction: column; */
  }
`;

const NavLink = (props: { text: string; width: number; height: number }) => {
  return <Link {...props}>{props.text}</Link>;
};

export { NavLink };
