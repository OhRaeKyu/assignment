import styled from 'styled-components';

import AccessUser from './container/AccessUser';
import AccessNum from './container/AccessNum';
import DAU from './container/DAU';
import ReferralChart from './container/ReferralChart';
import ReferralTable from './container/ReferralTable';

import COLOR from './utils/color';

export default function App() {
  return (
    <AppWrap>
      <BaschBoardWrap>
        <AccessUser />
        <AccessNum />
        <DAU />
        <ReferralChart />
        <ReferralTable />
      </BaschBoardWrap>
    </AppWrap>
  );
}

const AppWrap = styled.main`
  width: 100vw;
  height: 100vh;
`;

const BaschBoardWrap = styled.section`
  box-sizing: border-box;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  background-color: ${COLOR.GRAY};
`;
