import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Gallery } from "./containers/gallery";
import { Nav } from "./containers/nav";
import { dark, light, Styles } from "./global";
import { getScrollable, getTheme } from "./selectors/selectors";

const App = () => {
  const theme = useSelector(getTheme);
  const scrollable = useSelector(getScrollable);

  const body = document.querySelector("body")!;
  body.setAttribute("scrollable", "" + scrollable);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Styles />
        <Nav />

        <Gallery />
      </ThemeProvider>
    </>
  );
};

export default App;
