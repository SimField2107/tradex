import React from 'react';
import dynamic from 'next/dynamic';
import type { OHLC } from '../../lib/coinData';

// Dynamically import the Chart component with SSR turned off
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface CandlestickChartProps {
  data: OHLC[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  // Format the data for ApexCharts
  const series = [{
    data: data.map(d => ({
      x: new Date(d.time * 1000),
      y: [d.open, d.high, d.low, d.close],
    })),
  }];

  const options = {
    chart: {
      type: 'candlestick' as const,
      height: 300,
      background: 'transparent',
      toolbar: {
        show: false,
      },
    },
    theme: {
      mode: 'dark' as const,
    },
    xaxis: {
      type: 'datetime' as const,
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        formatter: (value: number) => `$${value.toLocaleString()}`,
      },
    },
  };

  // The 'type="candlestick"' can cause a TypeScript error without casting
  // so we handle it gracefully here.
  const chartType = 'candlestick' as const;

  return (
    <div id="chart">
      <Chart options={options} series={series} type={chartType} height={300} />
    </div>
  );
};

export default CandlestickChart;