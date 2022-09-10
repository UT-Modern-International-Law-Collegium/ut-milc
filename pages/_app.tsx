import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { chakraTheme } from '../lib/chakraTheme'; /* NOTE: 効いていない。 */

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
