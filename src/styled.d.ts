import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorMain: string,
    colorAccent: string,
    colorSelected: string,
    colorShadow: string,
    colorText: string,
    // colorBorder: string,
    // colorBorderSelected: string,
  }
}
