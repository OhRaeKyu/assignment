import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

function Seller() {
  if (isLogin()) {
    return (
      <div>
        <h1>판매자 센터</h1>
      </div>
    );
  } else {
    <Navigate replace to="/signin" />;
  }
}

export default Seller;
