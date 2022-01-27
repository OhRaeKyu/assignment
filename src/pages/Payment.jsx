import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

function Payment() {
  if (isLogin()) {
    return (
      <div>
        <h1>결제</h1>
      </div>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}

export default Payment;
