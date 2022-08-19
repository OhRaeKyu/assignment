import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from '@/api/axios';

import { setAccessData } from './modules/accessModule';

import AccessUser from './container/AccessUser';
import AccessNum from './container/AccessNum';
import DAU from './container/DAU';
import ReferralChart from './container/ReferralChart';
import ReferralTable from './container/ReferralTable';

import COLOR from './utils/color';

export default function App() {
  const dispath = useDispatch();
  const [loading, setLoading] = useState(false);

  const getAccessData = useCallback(async () => {
    await axios('event_1.json')
      .then((res) => {
        dispath(setAccessData(res.data.data.rows));
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [dispath]);

  useEffect(() => {
    getAccessData();
  }, [getAccessData]);

  return loading ? (
    <AppWrap>
      <BaschBoardWrap>
        <AccessUser />
        <AccessNum />
        <DAU />
        <ReferralChart />
        <ReferralTable />
      </BaschBoardWrap>
    </AppWrap>
  ) : (
    <Loading>Loading...</Loading>
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

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
`;
