import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useSelector } from '@/hooks/useTypedSelector';

import COLOR from '@/utils/color';
import ClockSrc from '@/images/clock.svg';
import { getMinDate, getMaxDate } from '@/utils/getDate';

interface Props {
  children: React.ReactNode;
  title: string;
  widthSize?: number;
  heightSize?: number;
  setDate: Dispatch<SetStateAction<string>>;
}

export default function Widget({
  children,
  title,
  widthSize,
  heightSize,
  setDate,
}: Props) {
  const dateList = useSelector((state) =>
    state.access.map((value) => value[0])
  );

  return (
    <WidgetWrap width={widthSize} height={heightSize}>
      <WidgetTitle>{title}</WidgetTitle>
      <label htmlFor="inpDate" className="blind">
        날짜 설정
      </label>
      <DateBtn
        id="inpDate"
        type="date"
        min={getMinDate(dateList)}
        max={getMaxDate(dateList)}
        onChange={(e) => setDate(e.target.value)}
      />
      {children}
    </WidgetWrap>
  );
}

const WidgetWrap = styled.article<{ width?: number; height?: number }>`
  box-sizing: border-box;
  position: relative;
  // dnd 적용 시 수정
  // display: inline-block;
  margin-top: 20px;
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  padding: 15px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const WidgetTitle = styled.h2`
  color: ${COLOR.BLUE};
  font-weight: 700;
`;

const DateBtn = styled.input`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;

  &:focus {
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-image: url(${ClockSrc});

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
