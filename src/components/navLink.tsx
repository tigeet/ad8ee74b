import { produceWithPatches } from "immer";
import styled from "styled-components";

interface LinkProps {
  size: number;
  label: string;
}

const Link = styled.div`
  /* color: ${(props) => props.theme.colorAccent}; */
  width: 120px;
  height: var(--navbarHeight);
  /* height: 32px; */
  /* border-radius: 6px; */
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.colorSelected};
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: 24px;
    /* position: relative; */
    /* top: 48px; */
    /* flex-direction: column; */
  }
`;

const NavLink = (props: { text: string }) => {
  return <Link>{props.text}</Link>;
};

export { NavLink };
