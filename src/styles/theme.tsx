import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    border: '#7289da',
    text: '#bdbdbd',
    titleText: '#99aab5',
    background: '#23272a',
    card: '#2c2f33',
    inputBackground: '#99aab5',
    inputColor: '#23272a',
    inputErrorColor: '#9b2828',
    buttonBackground: '#7289da',
    buttonColor: '#7289da',
  },
  spacings: {
    paddings: {
      card: '10px',
      button: '4px 8px',
    },
  },
  bordersRadius: {
    card: '5px',
    button: '8px',
  },
};

type Props = {
  children: React.ReactElement
}

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
