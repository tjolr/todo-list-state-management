// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#171923',
      },
    }),
  },
});

export default theme;
