import { useContext, useRef, useState } from "react";
import { Menu, Plus } from "react-feather";
import { useDispatch } from "react-redux";
import styled, { ThemeContext, useTheme } from "styled-components";
import { NavLink } from "../components/navLink";
import { NavLinks } from "../components/navLinkContainer";
import { ThemeButton } from "../components/themeButton";
import { Theme } from "../global";
import { getTheme } from "../selectors/selectors";
import { setScrollable } from "../slices/appSlice";

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbarHeight);
  z-index: 100000000000;
  align-items: center;

  transition: 0.3s all;
  background-color: ${(props) => props.theme.colorMain};
  color: ${(props) => props.theme.colorAccent};
  box-shadow: 0 1px 3px ${(props) => props.theme.colorShadow};

  justify-content: center;
  padding: 0 12px;
  @media screen and (min-width: 576px) {
    padding: none;
  }
`;

const NavContent = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
  /* padding: 0 12px; */
  /* height: fit-content; */
  /* justify-content: space-between; */
  /* align-items: center; */
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: min-content 1fr min-content;
  grid-template-areas: "themeButton space dropdown";

  @media screen and (min-width: 576px) {
    width: 528px;
    grid-template-columns: min-content 1fr;
    grid-template-areas: "themeButton space links";
  }

  @media screen and (min-width: 1200px) {
    width: 1072px;
  }

  /* position: ; */
`;

const DropdownContainer = styled.div`
  grid-area: dropdown;
  width: fit-content;
  height: fit-content;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colorAccent};

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const Nav = () => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <NavContent>
        <ThemeButton />

        <NavLinks active={active}>
          <NavLink text="Page 1" />
          <NavLink text="Page 2" />
          <NavLink text="Page 3" />
        </NavLinks>

        <DropdownContainer
          onClick={(e) => {
            dispatch(setScrollable());
            setActive((prev) => !prev);
          }}
        >
          <Menu />
        </DropdownContainer>
      </NavContent>
    </NavContainer>
  );
};

export { Nav };
