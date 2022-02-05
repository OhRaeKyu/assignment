import React from 'react';
import { Link, Navigate } from 'react-router-dom';
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
          <button type="button">구매회원가입</button>
          <button type="button">판매회원가입</button>
        </FormHeader>
        <Form method="post">
          <fieldset>
            <label htmlFor="userId">아이디</label>
            <input type="text" required id="userId" />
            <button type="button" className="btn-check">
              중복확인
            </button>
            {/* <strong>{res.error}</strong> */}
            <strong className="error">이미 사용 중인 아이디입니다.</strong>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" required id="userPw" />
            <label htmlFor="userPwCheck">비밀번호 확인</label>
            <input type="password" required id="userPwCheck" />
            <label htmlFor="userName">이름</label>
            <input type="text" required id="userName" />
            <label htmlFor="userPhone">전화번호</label>
            <input type="text" required id="userPhone" />
            <input type="text" required />
            <input type="text" required />
            <label htmlFor="userEmail">이메일</label>
            <input type="text" required id="userEmail" />
            <input type="text" required />
          </fieldset>
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            재능마켓의 <Link to="#">이용약관</Link> 및{' '}
            <Link to="#">개인정보처리방침</Link>에 대한 내용을 확인하였고
            동의합니다.
          </label>
          <button type="submit">가입하기</button>
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
    border: 1px solid ${PALLETS.GRAY};
  }

  .error {
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
