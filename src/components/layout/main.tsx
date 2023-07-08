import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/header';
import { NextPage } from 'next/types';


type Props = {
  children: React.ReactNode
}

const Main: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content={'currentColor'} />
      </Head>
      <main className={''}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Main;