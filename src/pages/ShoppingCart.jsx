import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

function ShoppingCart() {
  if (isLogin()) {
    return (
      <div>
        <h1>장바구니</h1>
      </div>
    );
  } else {
    <Navigate replace to="/signin" />;
  }
}

export default ShoppingCart;
