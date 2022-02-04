import React from 'react';
import styled from 'styled-components';
import { PALLETS } from '../../utils/constants';

function Footer() {
  return <FooterWrap>© 2021. Oh Rae Kyu. All rights reserved.</FooterWrap>;
}

export default Footer;

const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  background-color: ${PALLETS.LIGHT_GRAY};
`;
