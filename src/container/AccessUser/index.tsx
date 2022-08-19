import React, { useState } from 'react';
import { useSelector } from '@/hooks/useTypedSelector';

import { getMaxDate, getYesterday } from '@/utils/getDate';

import VisitCountWidget from '@/components/Widget/AccessWidget';

export default function AccessUser() {
  const accessData = useSelector((state) => state.access);
  const dateList = accessData.map((value) => value[0]);
  const maxDate = getMaxDate(dateList);

  const [date, setDate] = useState(maxDate);

  const uniqueEvent = parseInt(
    accessData.filter((value) => value[0] === date)[0][1]
  );

  const yesterUniqueEvent = dateList.includes(getYesterday(date))
    ? parseInt(
        accessData.filter((value) => value[0] === getYesterday(date))[0][1]
      )
    : 0;

  const difference = uniqueEvent - yesterUniqueEvent;

  return (
    <VisitCountWidget
      title="접속유저"
      eventCount={uniqueEvent}
      difference={difference}
      setDate={setDate}
    />
  );
}
