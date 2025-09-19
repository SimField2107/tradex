import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ArcElement
);

interface ChartData {
  datasets: Array<{
    data: number[] | Array<{x: number, y: number}>;
    borderColor?: string;
    backgroundColor?: string | ((context: ChartContext) => string);
    fill?: boolean;
    tension?: number;
    pointRadius?: number;
  }>;
  labels?: string[];
}

interface ChartContext {
  chart: {
    ctx: CanvasRenderingContext2D;
    scales: {
      y: {
        getPixelForValue: (value: number) => number;
      };
    };
    getDatasetMeta: (datasetIndex: number) => {
      data: Array<{
        getProps: (props: string[], mode: boolean) => { y: number };
      }>;
    };
  };
  index: number;
  datasetIndex: number;
  type: string;
  xStarted?: boolean;
  yStarted?: boolean;
}

interface CryptoChartProps {
  title: string;
  type: 'line' | 'doughnut' | 'progressive';
  data: number[] | ChartData;
  labels?: string[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ title, type, data, labels }) => {
  let chartData;
  let options;
  let ChartComponent;

  const isPositive = Array.isArray(data) && data.length > 1 ? data[data.length - 1] > data[0] : false;

  switch (type) {
    case 'line':
      ChartComponent = Line;
      
      chartData = {
        labels,
        datasets: [
          {
            fill: true,
            data,
            borderColor: isPositive ? 'rgba(76, 175, 80, 1)' : 'rgba(255, 99, 132, 1)',
            backgroundColor: (context: ChartContext) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              if (isPositive) {
                gradient.addColorStop(0, 'rgba(76, 175, 80, 0.4)');
                gradient.addColorStop(1, 'rgba(76, 175, 80, 0)');
              } else {
                gradient.addColorStop(0, 'rgba(255, 99, 132, 0.4)');
                gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');
              }
              return gradient;
            },
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      };
      options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: { mode: 'index' as const, intersect: false },
        },
        scales: { x: { display: false }, y: { display: false } },
        elements: { line: { borderWidth: 2 } },
      };
      break;

    case 'doughnut':
      ChartComponent = Doughnut;
      chartData = {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              'rgba(108, 99, 255, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 205, 86, 1)',
            ],
            borderColor: '#2a2a4a',
            borderWidth: 5,
          },
        ],
      };
      options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        plugins: {
          legend: { display: false },
        },
      };
      break;

    case 'progressive': {
      ChartComponent = Line;
      
      const totalDuration = 10000;
      const chartDataTyped = data as ChartData;
      const dataLength = chartDataTyped.datasets && chartDataTyped.datasets[0] ? chartDataTyped.datasets[0].data.length : 1;
      const delayBetweenPoints = totalDuration / dataLength;
      
      const previousY = (ctx: ChartContext) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
      
      const animation = {
        x: {
          type: 'number' as const,
          easing: 'linear' as const,
          duration: delayBetweenPoints,
          from: NaN,
          delay(ctx: ChartContext) {
            if (ctx.type !== 'data' || ctx.xStarted) { return 0; }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
          }
        },
        y: {
          type: 'number' as const,
          easing: 'linear' as const,
          duration: delayBetweenPoints,
          from: previousY,
          delay(ctx: ChartContext) {
            if (ctx.type !== 'data' || ctx.yStarted) { return 0; }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
          }
        }
      };

      chartData = data;
      options = {
        responsive: true,
        maintainAspectRatio: false,
        animation,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index' as const,
            intersect: false
          }
        },
        scales: {
          x: { display: false, type: 'linear' },
          y: { display: false, type: 'linear' }
        },
        elements: { line: { borderWidth: 2, tension: 0.4 } },
      };
      break;
    }

    default:
      return null;
  }

  return (
    <div className="chart-card">
      <div className="chart-title">{title}</div>
      <div className="chart-wrapper">
        <ChartComponent data={chartData} options={options} />
      </div>
    </div>
  );
};


export default CryptoChart;