import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';
import styled from 'styled-components';
import { PALLETS } from '../utils/constants';

import Header from '../components/Sign/Header';

function SignUp() {
  if (!isLogin()) {
    return (
      <SignUpWrap>
        <h2 className="blind">회원가입 페이지</h2>
        <Header />
        <FormHeader>
          <button type="button">구매회원 회원가입</button>
          <button type="button">판매회원 회원가입</button>
        </FormHeader>
        <Form method="post">
          <label className="blind">아이디</label>
          <input type="text" required placeholder="아이디" />
          <label className="blind">비밀번호</label>
          <input type="password" required placeholder="비밀번호" />
          <label className="blind">비밀번호 확인</label>
          <input type="password" required placeholder="비밀번호 확인" />
          {/* <strong>{res.error}</strong> */}
          <strong className="error">
            아이디 또은 비밀번호가 일치하지 않습니다.
          </strong>
          <button type="submit" className="btn-login">
            로그인
          </button>
        </Form>
      </SignUpWrap>
    );
  } else {
    <Navigate replace to="/" />;
  }
}

export default SignUp;

const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.div`
  button {
    box-sizing: border-box;
    width: 275px;
    height: 60px;
    border: 1px solid ${PALLETS.GRAY};
    border-bottom: none;
    border-radius: 10px 10px 0 0;

    &:nth-child(2) {
      border-bottom: 1px solid ${PALLETS.GRAY};
      background-color: ${PALLETS.LIGHT_GRAY};
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
