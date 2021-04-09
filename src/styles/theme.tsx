import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    border: '#667fd8',
    text: '#bdbdbd',
    titleText: '#99aab5',
    background: '#23272a',
    card: '#2c2f33',
    cardHeader: '#18181a',
    inputBackground: '#abbeca',
    inputColor: '#23272a',
    inputErrorColor: '#d83535',
    buttonBackground: '#7289da',
    buttonColor: '#7289da',
    itemList: '#242629',
  },
  spacings: {
    paddings: {
      card: '10px',
      button: '4px 8px',
    },
  },
  bordersRadius: {
    card: '5px',
    button: '4px',
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
