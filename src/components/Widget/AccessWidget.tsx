import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Widget from './index';

import { setPriceNotation } from '@/utils/setPriceNotation';
import COLOR from '@/utils/color';
import ArrowUpSrc from '@/images/arrow-up.svg';
import ArrowDownSrc from '@/images/arrow-down.svg';

interface Props {
  title: string;
  eventCount: number;
  difference: number;
  setDate: Dispatch<SetStateAction<string>>;
}

export default function AccessWidget({
  title,
  eventCount,
  difference,
  setDate,
}: Props) {
  const renderSubTitle = (title: string) => {
    switch (title) {
      case '접속유저':
        return 'Unique Event Count';
      case '접속횟수':
        return 'Total Event Count';
    }
  };

  return (
    <Widget title={title} setDate={setDate}>
      <SubTitle title={title}>{renderSubTitle(title)}</SubTitle>
      <Total>{setPriceNotation(eventCount)}</Total>
      <Difference difference={difference}>
        {setPriceNotation(difference)}
      </Difference>
    </Widget>
  );
}

const SubTitle = styled.small<{ title: string }>`
  display: block;
  position: relative;
  margin: 15px 0;
  padding-left: 40px;
  font-size: 12px;
  color: #999;

  &::before {
    content: 'SUM';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    padding: 3px;
    background-color: ${COLOR.GRAY};
    border-radius: 5px;
  }
`;

const Total = styled.p`
  margin-bottom: 15px;
  font-size: 2rem;
  font-weight: bold;
`;

const Difference = styled.p<{ difference: number }>`
  position: relative;
  color: ${(props) => (props.difference >= 0 ? COLOR.RED : COLOR.BLUE)};
  padding-left: 25px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;

    width: 12px;
    height: 12px;
    background-image: url(${(props) =>
      props.difference >= 0 ? ArrowUpSrc : ArrowDownSrc});
    background-repeat: no-repeat;
  }
`;
