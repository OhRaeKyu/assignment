import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PALLETS } from '../../utils/constants';

import { ProductData } from '../../API/ProductData';

function ProductList() {
  return (
    <ProductWrap>
      <h2 className="blind">판매 중인 상품 리스트입니다.</h2>
      {ProductData.map((ele) => (
        <ProductItem key={ele.id}>
          <Link to={`/product/${ele.id}`}>
            <img src={ele.image} alt={ele.title} />
          </Link>
          <p className="name-seller">{ele.sellerName}</p>
          <h3 className="tit-product">{ele.title}</h3>
          <p className="price-product">
            <strong>{ele.price}</strong>원
          </p>
        </ProductItem>
      ))}
    </ProductWrap>
  );
}

export default ProductList;

const ProductWrap = styled.ul`
  padding: 5vw 15vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vw;
`;

const ProductItem = styled.li`
  img {
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    border: 1px solid ${PALLETS.LIGHT_GRAY};
    border-radius: 5px;
    margin-bottom: 15px;
  }

  .name-seller {
    color: ${PALLETS.DARK_GRAY};
  }

  .tit-product {
    margin: 10px 0;
    font-size: 18px;
  }

  .price-product {
    strong {
      font-size: 1.5rem;
      font-family: GmarketSansBold;
    }
  }
`;
