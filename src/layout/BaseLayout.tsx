import * as React from 'react';
import { Header, Footer } from '../components';
import Router from '../config/Router';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <section>{Router}</section>
      <Footer />
    </>
  );
};

export default BaseLayout;
