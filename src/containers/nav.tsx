import { useContext, useRef, useState } from "react";
import { Menu, Plus } from "react-feather";
import styled from "styled-components";
import { MenuButton } from "../components/menuButton";
import { NavLink } from "../components/navLink";
import { NavLinks } from "../components/navLinkContainer";
import { SlideButton } from "../components/slideButton";
import { ThemeButton } from "../components/themeButton";
import { useAppDispatch } from "../hooks";
import { setScrollable } from "../slices/appSlice";

interface NavContainerProps {
  height: number;
}

const NavContainer = styled.div<NavContainerProps>`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  z-index: 100000000000;
  align-items: center;

  transition: 0.3s all;
  background-color: ${(props) => props.theme.colorMain};
  color: ${(props) => props.theme.colorAccent};
  box-shadow: 0 1px 3px ${(props) => props.theme.colorShadow};

  justify-content: center;
  padding: 0 12px;
  @media (min-width: 576px) {
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

  @media (min-width: 576px) {
    width: 528px;
    grid-template-columns: min-content 1fr;
    grid-template-areas: "themeButton space links";
  }

  @media (min-width: 1200px) {
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

  @media (min-width: 576px) {
    display: none;
  }
`;

interface NavProps {
  height: number;
  linkWidth?: number;
  linkHeight: number;
  iconInnerSize: number;
  iconOuterSize: number;
}

const Nav = ({
  height,
  linkWidth,
  linkHeight,
  iconInnerSize,
  iconOuterSize,
}: NavProps) => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <NavContainer height={height}>
      <NavContent>
        <ThemeButton outerSize={iconOuterSize} innerSize={iconInnerSize} />

        <NavLinks active={active}>
          <NavLink text="Page 1" height={linkHeight} fontSize={24} />
          <NavLink text="Page 2" height={linkHeight} fontSize={24} />
          <NavLink text="Page 3" height={linkHeight} fontSize={24} />

          <SlideButton
            height={32}
            text="Forward"
            borderColor="white"
            contentColor="white"
            backgroundColor="#185abc"
          />
          
        </NavLinks>

        <DropdownContainer
          onClick={(e) => {
            dispatch(setScrollable());
            setActive((prev) => !prev);
          }}
        >
          <MenuButton outerSize={iconOuterSize} innerSize={iconInnerSize} />
        </DropdownContainer>
      </NavContent>
    </NavContainer>
  );
};

export { Nav };
