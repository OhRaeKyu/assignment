import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PALLETS } from '../../utils/constants';

import { isLogin } from '../../utils/isLogin';

// API 받고 수정
const login_type = 'BUYER';

const NavItem = () => {
  if (isLogin()) {
    return (
      <>
        {login_type === 'SELLER' ? (
          <Link to="/sellercenter" className="wrap-seller">
            <div className="link-seller"></div>
            <span>판매자 센터</span>
          </Link>
        ) : null}
        <Link to="/cart">
          <div className="link-cart"></div>
          <span>장바구니</span>
        </Link>
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem('token');
          }}
        >
          <div className="link-signin"></div>
          <span>로그아웃</span>
        </Link>
      </>
    );
  } else {
    return (
      <Link to="/signin">
        <div className="link-signin"></div>
        <span>로그인</span>
      </Link>
    );
  }
};

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <h1 className="logo">재능마켓</h1>
      </Link>
      <NavWrap>
        <NavItem />
      </NavWrap>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0 15vw;
  border-bottom: 1px solid ${PALLETS.GRAY};

  .logo {
    font-family: 'GmarketSansBold';
    font-size: 2.5rem;
    color: ${PALLETS.SKY_BLUE};
  }
`;

const NavWrap = styled.nav`
  display: flex;

  a {
    font-size: 0.75rem;
    color: ${PALLETS.DARK_GRAY};

    div {
      margin: 0 auto 5px;
    }
  }

  a + a {
    margin-left: 30px;
  }

  .link-cart,
  .link-signin {
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/shopping-cart.png');
    background-size: cover;
  }

  .wrap-seller {
    display: flex;
    align-items: center;
    background-color: ${PALLETS.SKY_BLUE};
    color: ${PALLETS.WHITE};
    padding: 0 15px;
    border-radius: 17.5px;

    .link-seller {
      width: 20px;
      height: 20px;
      background-image: url('/assets/icon/shopping-bag.png');
      background-size: cover;
      margin-right: 5px;
    }
  }
`;
