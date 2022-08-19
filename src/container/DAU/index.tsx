import React, { useState } from 'react';
import { useSelector } from '@/hooks/useTypedSelector';

import { getMaxDate } from '@/utils/getDate';

import Widget from '@/components/Widget';
import BarChart from '@/components/Chart/BarChart';

export default function DAU() {
  const CHART_RANGE = 10;
  const accessData = useSelector((state) => state.access);
  const maxDate = getMaxDate(accessData.map((value) => value[0]));

  const [date, setDate] = useState(maxDate);

  const chartData = accessData.filter(
    (value) =>
      new Date(value[0]).getTime() <= new Date(date).getTime() &&
      new Date(value[0]).getTime() >
        new Date(date).setDate(new Date(date).getDate() - CHART_RANGE)
  );

  return (
    <Widget title="DAU" setDate={setDate}>
      <BarChart chartData={chartData} />
    </Widget>
  );
}
