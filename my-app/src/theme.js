import { createTheme } from '@mui/material/styles';

export const colors = {
  black: '#444444',
  white: '#FFFFFF',
  gray: '#7A7A7A',
  lightGray: '#C1C1C1'
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1366,
      xl: 1920
    }
  }
});

export default theme;
