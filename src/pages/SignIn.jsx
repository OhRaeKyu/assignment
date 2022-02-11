import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';
import { Link } from 'react-router-dom';

import Header from '../components/Sign/Header';
import styled from 'styled-components';
import { PALLETS } from '../utils/constants';

function SignIn() {
  const buyerMode = useRef(null);
  const sellerMode = useRef(null);
  const [mode, setMode] = useState('buyer');

  const toggleMode = (e) => {
    e.preventDefault();
    e.target.classList.add('on');
    if (e.target.id === 'buyer') {
      setMode('buyer');
      sellerMode.current.classList.remove('on');
    } else {
      setMode('seller');
      buyerMode.current.classList.remove('on');
    }
  };

  if (!isLogin()) {
    return (
      <SignInWrap>
        <h2 className="blind">로그인 페이지</h2>
        <Header />
        <FormHeader>
          <button
            type="button"
            className="on"
            id="buyer"
            onClick={toggleMode}
            ref={buyerMode}
          >
            구매회원 로그인
          </button>
          <button
            type="button"
            onClick={toggleMode}
            id="seller"
            ref={sellerMode}
          >
            판매회원 로그인
          </button>
        </FormHeader>
        <Form method="post">
          <label className="blind">아이디</label>
          <input type="text" required placeholder="아이디" />
          <label className="blind">비밀번호</label>
          <input type="password" required placeholder="비밀번호" />
          {/* <strong className="error">{res.error}</strong> */}
          <strong className="error">
            아이디 또은 비밀번호가 일치하지 않습니다.
          </strong>
          <button type="button" className="btn-login">
            로그인
          </button>
        </Form>
        <LinkWrap>
          <Link to="/signup">회원가입</Link>
          <Link to="/signin">비밀번호 찾기</Link>
        </LinkWrap>
      </SignInWrap>
    );
  } else {
    <Navigate replace to="/" />;
  }
}

export default SignIn;

const SignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.div`
  button {
    box-sizing: border-box;
    width: 275px;
    height: 60px;
    background-color: ${PALLETS.LIGHT_GRAY};
    border: 1px solid ${PALLETS.GRAY};
    border-radius: 10px 10px 0 0;

    &.on {
      background-color: inherit;
      border-bottom: none;
    }
  }
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 35px;
  margin-bottom: 30px;
  border: 1px solid ${PALLETS.GRAY};
  border-top: none;
  border-radius: 0 0 10px 10px;

  input {
    padding: 20px 0;
    border-bottom: 1px solid ${PALLETS.GRAY};
  }

  .error {
    margin: 26px 0;
    color: red;
    opacity: 0;
  }

  .btn-login {
    padding: 20px 0;
    color: ${PALLETS.WHITE};
    background-color: ${PALLETS.SKY_BLUE};
    border-radius: 5px;
  }
`;

const LinkWrap = styled.div`
  a {
    color: ${PALLETS.DARK_GRAY};
    padding: 0 15px;
    position: relative;

    &:nth-child(2)::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 1rem;
      background-color: ${PALLETS.DARK_GRAY};
    }
  }
`;
