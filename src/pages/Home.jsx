import React from 'react';

import Carousel from '../components/Home/Carousel';
import ProductList from '../components/Home/ProductList';

function Home() {
  return (
    <>
      <h2 className="blind">홈 페이지</h2>
      <Carousel />
      <ProductList />
    </>
  );
}

export default Home;
