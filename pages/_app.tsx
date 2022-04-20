import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../src/theme/GlobalStyles';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp