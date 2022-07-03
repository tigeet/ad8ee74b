import styled from "styled-components";
import { JSXElements } from "../types";

interface NavLinkProps {
  active: boolean;
}

const Container = styled.div<NavLinkProps>`
  grid-area: links;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 100;

  /* background-color: ${(props) => props.theme.colorMain}; */
  transition: background-color 0.3s, left 0.2s, visibility 0.3s;

  @media (max-width: 576px) {
    display: flex;
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    top: var(--navbarHeight);
    left: ${(props) => (props.active ? "0" : "-100vw")};
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
  }
`;

const NavLinks = (props: { active: boolean; children: JSXElements }) => {
  return <Container active={props.active}>{props.children}</Container>;
};

export { NavLinks };
