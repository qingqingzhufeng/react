import React from 'react';
import { Header, Footer } from '../components';
import Router from '../config/router';

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
