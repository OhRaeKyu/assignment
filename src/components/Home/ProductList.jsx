import React from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const productData = {
    Id: 123,
    Title: '대체 텍스트',
    Image: '/assets/favicon.ico',
  };
  return (
    <Link to={`/product/${productData.Id}`}>
      <img src={productData.Image} alt={productData.Title} />
    </Link>
  );
}

export default ProductList;
