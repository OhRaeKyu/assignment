import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

function SignIn() {
  if (!isLogin()) {
    return (
      <div>
        <h1>로그인 페이지</h1>
      </div>
    );
  } else {
    <Navigate replace to="/" />;
  }
}

export default SignIn;
