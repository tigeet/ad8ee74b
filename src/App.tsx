import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Gallery } from "./components/gallery";
import { Nav } from "./components/nav";
import { dark, light, Reset, Styles } from "./global";
import { useAppSelector } from "./hooks";
import { getScrollable, getTheme } from "./selectors/selectors";

const App = () => {
  const theme = useAppSelector(getTheme);
  const scrollable = useAppSelector(getScrollable);

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
          // linkHeight={32}
          linkHeight={50}
          iconInnerSize={24}
          iconOuterSize={32}
        />
        <Gallery />
      </ThemeProvider>
    </>
  );
};

export default App;
