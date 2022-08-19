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
import { setReferralData } from './modules/referralModule';
import { setCountryData } from './modules/countryModule';

export default function App() {
  const dispath = useDispatch();
  const [loading, setLoading] = useState(false);

  const getAccessData = useCallback(async () => {
    await axios('event_1.json')
      .then((res) => {
        const data: string[][] = res.data.data.rows;
        data.sort(
          (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()
        );
        dispath(setAccessData(data));
      })
      .catch((err) => console.log(err));

    await axios('event_3.json')
      .then((res) => {
        const data: string[][] = res.data.data.rows;
        data.sort((a, b) => parseInt(a[1]) - parseInt(b[1]));
        dispath(setReferralData(data));
      })
      .catch((err) => console.log(err));

    await axios('event_4.json')
      .then((res) => {
        dispath(setCountryData(res.data.data.rows));
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [dispath]);

  useEffect(() => {
    getAccessData();
  }, [getAccessData]);

  return loading ? (
    <AppWrap>
      <DashBoardWrap>
        <AccessUser />
        <AccessNum />
        <DAU />
        <ReferralChart />
        <ReferralTable />
      </DashBoardWrap>
    </AppWrap>
  ) : (
    <Loading>Loading...</Loading>
  );
}

const AppWrap = styled.main`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ${COLOR.GRAY};
`;

const DashBoardWrap = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding: 10px;
  overflow: hidden;
`;

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
`;
