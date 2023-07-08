import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head'
import { NextPage } from 'next/types';

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

const MyApp: NextPage<AppLayoutProps> = ({ Component, pageProps }) => {

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>Jihan Lugas</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
