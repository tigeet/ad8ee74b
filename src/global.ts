import { createGlobalStyle } from "styled-components"
import { DefaultTheme } from 'styled-components';



const light: DefaultTheme = {
  colorMain: 'white',
  colorAccent: '#363537',
  colorShadow: '#aeb1b0',
  colorSelected: '#2667FF33',

}

const dark: DefaultTheme = {
  colorMain: "#272727",
  colorAccent: 'white',
  colorShadow: '#6b6670',
  colorSelected: '#f9f8f833',
}


const Reset = createGlobalStyle`
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }

  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
    display:block;
  }

  nav ul {
    list-style:none;
  }

  blockquote, q {
    quotes:none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content:'';
    content:none;
  }

  a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }

  /* change colours to suit your needs */
  ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
  }

  /* change colours to suit your needs */
  mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
  }

  del {
  text-decoration: line-through;
  }

  abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
  }

  table {
    border-collapse:collapse;
    border-spacing:0;
  }

  /* change border colour to suit your needs */
  hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
  }

  input, select {
    vertical-align:middle;
  }



  * {
    margin: 0;
    padding: 0;
    border:none;
    outline: none;
    background:transparent;
    border-radius: 0;
    box-sizing: border-box;
  }
`;


const Styles = createGlobalStyle`
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
    background-color: ${props => props.theme.colorMain};
    transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;
  }

  
  body {
    --navbarHeight: 48px;
      line-height:1;
      font-family: Nunito, Roboto, sans-serif;
      /* transition: background-color 0.3s; */
  }

  body[scrollable='false'] {
      height: 100%;
      overflow: hidden;
  }




`;

export { light, dark, Styles, Reset }

