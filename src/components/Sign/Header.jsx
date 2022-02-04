import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PALLETS } from '../../utils/constants';

function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <h1 className="logo">재능마켓</h1>
      </Link>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 180px 0 70px;

  .logo {
    font-family: 'GmarketSansBold';
    font-size: 2.5rem;
    color: ${PALLETS.SKY_BLUE};
  }
`;
