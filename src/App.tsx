import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Post } from "./components/post";
import { Gallery } from "./containers/gallery";
import { Nav } from "./containers/nav";
import { dark, light, Reset, Styles } from "./global";
import { getScrollable, getTheme } from "./selectors/selectors";

const App = () => {
  const theme = useSelector(getTheme);
  const scrollable = useSelector(getScrollable);

  const body = document.querySelector("body")!;
  body.setAttribute("scrollable", "" + scrollable);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Reset />
        <Styles />

        <Nav
          height={50}
          linkWidth={120}
          linkHeight={32}
          iconInnerSize={24}
          iconOuterSize={32}
        />
        <Gallery />
      </ThemeProvider>
    </>
  );
};

export default App;
