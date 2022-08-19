import React, { useState } from 'react';
import { useSelector } from '@/hooks/useTypedSelector';

import { getMaxDate } from '@/utils/getDate';

import Widget from '@/components/Widget';
import PieChart from '@/components/Chart/PieChart';

export default function ReferralChart() {
  const referralData = useSelector((state) => state.referral);
  const topData = referralData.slice(-4);

  let etcData = 0;
  referralData.forEach((value) => (etcData += parseInt(value[1])));

  const chartData = [...topData, ['etc', etcData.toString()]];

  return (
    <Widget title="Top Referral">
      <PieChart chartData={chartData} />
    </Widget>
  );
}
