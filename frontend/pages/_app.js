import '@/styles/globals.css'
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NotificationContextProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </>

  );
}

export default MyApp;