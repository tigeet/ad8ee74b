import styled, { useTheme } from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getTheme } from "../selectors/selectors";
import { setDarkTheme, setLightTheme } from "../slices/appSlice";

interface ContainerProps {
  size: number;
}

const StyledThemeButton = styled.div<ContainerProps>`
  grid-area: themeButton;
  /* color: ${(props) => props.theme.colorAccent}; */
  /* background-color: ${(props) => props.theme.colorAccent}; */
  /* position: absolute; */
  /* left: 100px; */
  /* top: 100px; */
  aspect-ratio: 1/1;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* width: 32px; */
  /* height: 32px; */
  font-size: 18px;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colorSelected};
  }
`;

interface IconProps {
  size: number;
}
const StyledThemeIcon = styled.svg.attrs(
  (props: { isDark: boolean; rot?: string }) => ({
    isDark: props.isDark,
    rot: props.isDark ? "180deg" : "0",
  })
)<IconProps>`
  fill: ${(props) => props.theme.colorAccent};
  transition: transform 0.5s;
  aspect-ratio: 1/1;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: rotate(${(props) => props.rot!});
  /* transform: ; */
  /* &:hover {
    transform: rotate(180deg);
  } */
`;
const ThemeButton = (props: { innerSize: number; outerSize: number }) => {
  const theme = useAppSelector(getTheme);
  const dispatch = useAppDispatch();

  const setLight = () => dispatch(setLightTheme());
  const setDark = () => dispatch(setDarkTheme());

  const onClick = () => {
    theme === "light" ? setDark() : setLight();
  };

  return (
    <StyledThemeButton size={props.outerSize} onClick={onClick}>
      <StyledThemeIcon
        size={props.innerSize}
        isDark={theme === "dark"}
        // class="MuiSvgIcon-root theme-switch-icon theme-switch-rotated-out"
        focusable="false"
        // fill={}
        // stroke="white"
        viewBox="0 0 24 24"
        aria-hidden="true"
        // style="filter: invert(1);"
      >
        <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
      </StyledThemeIcon>

      {/* <svg></svg> */}
      {/* {theme[0].toUpperCase()} */}
    </StyledThemeButton>
  );
};

export { ThemeButton };
