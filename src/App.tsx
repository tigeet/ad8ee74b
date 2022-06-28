import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GridComponent } from "./components/grid";
import { ThemeButton } from "./components/themeButton";
import { dark, light, Styles } from "./global";
import { getTheme } from "./selectors/selectors";

const urls: string[] = [
  "https://i.pinimg.com/736x/87/2c/c1/872cc19ba08c79b5445c2f235904677f.jpg",
  "https://i.pinimg.com/564x/ca/33/50/ca3350627d5080cbac0a5d95d5b15d93.jpg",
  "https://i.pinimg.com/236x/f7/eb/b4/f7ebb40874e4798d0969a1f248199363.jpg",
  "https://i.pinimg.com/236x/04/fb/bc/04fbbc3951e31330d162ae1366898fa8.jpg",
  "https://i.pinimg.com/236x/2e/51/4d/2e514d3e360e34a12de2741fff1be68d.jpg",
  "https://i.pinimg.com/564x/99/85/9f/99859fd2363a955730077495e959b85e.jpg",
];

const App = () => {
  const theme = useSelector(getTheme);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Styles />
        <ThemeButton />
        <GridComponent urls={urls} />
      </ThemeProvider>
    </>
  );
};

export default App;
