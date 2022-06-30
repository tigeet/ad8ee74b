import { createGlobalStyle } from "styled-components"

interface Theme {
  colorMain: string,
  colorAccent: string,
  colorSelected: string,
  colorShadow: string,
  // colorBorder: string,
  // colorBorderSelected: string,
}


const light: Theme = {
  colorMain: 'white',
  colorAccent: '#363537',
  colorShadow: '#aeb1b0',
  colorSelected: '#2667FF33',

}

const dark: Theme = {
  colorMain: "#272727",
  colorAccent: 'white',
  colorShadow: '#6b6670',
  colorSelected: '#f9f8f833',
}

const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border:none;
    outline: none;
    background:transparent;
    border-radius: 0;
    box-sizing: border-box;
    font-family: Nunito, Roboto, sans-serif;
  }

  @font-face {
    font-family: 'Nunito Light';
    src: url("./Nunito/static/Nunito-Light.ttf");
    font-weight: 300;
  }

  @font-face {
    font-family: 'Nunito';
    src: url("./Nunito/static/Nunito-Regular.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: 'Google Sans';
    src: url("./GoogleSans/GoogleSans-Regular.ttf");
  }


  html {
    background-color: ${(props: {theme: Theme}) => props.theme.colorMain};
    /* color: ${(props: {theme: Theme}) => props.theme.colorAccent}; */
    transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;
  }
`;

export { light, dark, Styles }
export type {Theme}

