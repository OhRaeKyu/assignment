import React, { useState } from 'react';
import { useSelector } from '@/hooks/useTypedSelector';

import { getMaxDate } from '@/utils/getDate';

import Widget from '@/components/Widget';

export default function DAU() {
  const maxDate = useSelector((state) =>
    getMaxDate(state.access.map((value) => value[0]))
  );

  const [date, setDate] = useState(maxDate);

  return (
    <Widget title="DAU" setDate={setDate}>
      DAU
    </Widget>
  );
}
