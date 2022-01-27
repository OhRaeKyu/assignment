import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

function SignUp() {
  if (!isLogin()) {
    return (
      <div>
        <h1>회원가입</h1>
      </div>
    );
  } else {
    <Navigate replace to="/" />;
  }
}

export default SignUp;
