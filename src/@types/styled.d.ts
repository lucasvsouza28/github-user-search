import 'styled-components';

declare module 'styled-components' {

  export interface DefaultTheme {
    color: {
      text: {
        black: string,
        secondary: string,
        anchor: string,
      },
      bg: {
        body: string,
        element: string,
      }
    }
  }
}
