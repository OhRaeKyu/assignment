import React, { useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';
import styled from 'styled-components';
import { PALLETS } from '../utils/constants';

import Header from '../components/Sign/Header';

function SignUp() {
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
      <SignUpWrap>
        <h2 className="blind">회원가입 페이지</h2>
        <Header />
        <FormHeader>
          <button
            type="button"
            className="on"
            id="buyer"
            onClick={toggleMode}
            ref={buyerMode}
          >
            구매회원가입
          </button>
          <button
            type="button"
            onClick={toggleMode}
            id="seller"
            ref={sellerMode}
          >
            판매회원가입
          </button>
        </FormHeader>
        <Form>
          <fieldset>
            <label htmlFor="userId">아이디</label>
            <div className="multiForm">
              <input type="text" required className="inpId" id="userId" />
              <button type="button" className="btn-check">
                중복확인
              </button>
            </div>
            {/* <strong>{res.error}</strong> */}
            <strong className="error">이미 사용 중인 아이디입니다.</strong>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" required className="inpPw" id="userPw" />
            <label htmlFor="userPwCheck">비밀번호 확인</label>
            <input type="password" required id="userPwCheck" />
          </fieldset>
          <fieldset>
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
          {mode === 'seller' ? (
            <fieldset>
              <label htmlFor="sellerNum">사업자 등록번호</label>
              <input type="text" required id="sellerNum" />
              <button type="button" className="btn-check">
                인증
              </button>
              <label htmlFor="storeName">스토어 이름</label>
              <input type="text" required id="storeName" />
            </fieldset>
          ) : null}
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            재능마켓의 <Link to="#">이용약관</Link> 및{' '}
            <Link to="#">개인정보처리방침</Link>에 대한 내용을 확인하였고
            동의합니다.
          </label>
          <button type="button">가입하기</button>
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

  fieldset + fieldset {
    margin-top: 40px;
  }

  label {
    display: block;
    color: ${PALLETS.DARK_GRAY};
    margin: 15px 0 5px;
  }

  input {
    box-sizing: border-box;
    border: 1px solid ${PALLETS.GRAY};
    border-radius: 5px;
    padding: 0 15px;
    width: 100%;
    height: 55px;
  }

  .multiForm {
    display: flex;
    justify-content: space-between;
  }

  .inpId {
    width: 70%;
  }

  .inpPw {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      display: block;
      right: 0;
      top: 0;
      width: 15px;
      height: 15px;
      background-color: ${PALLETS.SKY_BLUE};
      border-radius: 50%;
    }
  }

  .btn-check {
    width: 25%;
    color: ${PALLETS.WHITE};
    background-color: ${PALLETS.SKY_BLUE};
    border-radius: 5px;
  }

  .error {
    display: none;
    color: red;
    // opacity: 0;
  }

  .btn-login {
    padding: 20px 0;
    color: ${PALLETS.WHITE};
    background-color: ${PALLETS.SKY_BLUE};
    border-radius: 5px;
  }
`;
