import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(...registerables);

interface Props {
  chartData: string[][];
}

export default function PieChart({ chartData }: Props) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const data = {
    labels: chartData.map((value) => value[0]),
    datasets: [
      {
        label: '# of Votes',
        data: chartData.map((value) => value[1]),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <PieChartWrap>
      <Pie data={data} options={options} />
    </PieChartWrap>
  );
}

const PieChartWrap = styled.div`
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
`;
