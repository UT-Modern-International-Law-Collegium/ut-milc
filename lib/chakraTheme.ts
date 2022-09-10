import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        h2: {
          fontFamiry: 'serif',
        },
      },
      size: {
        h2: {
          fontFamiry: 'serif',
        },
      },
    },
  },
});

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'serif',
  },
};
