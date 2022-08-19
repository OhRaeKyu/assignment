import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import COLOR from '@/utils/color';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  chartData: string[][];
}

export default function BarChart({ chartData }: Props) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'bottom' as const,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels: chartData.map((value) => value[0]),
    datasets: [
      {
        type: 'line' as const,
        label: 'Unique Event Count',
        data: chartData.map((value) => value[1]),
        borderColor: COLOR.DARK_GREEN,
        backgroundColor: COLOR.WHITE,
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'Total Event Count',
        data: chartData.map((value) => value[2]),
        backgroundColor: COLOR.GREEN,
        yAxisID: 'y1',
      },
    ],
  };

  return (
    <BarChartWrap>
      <Chart type="bar" data={data} options={options} />
    </BarChartWrap>
  );
}

const BarChartWrap = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 350px;
`;
