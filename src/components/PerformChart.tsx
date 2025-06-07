"use client"

import { 
  Chart, 
  PieController, 
  ArcElement, 
  Tooltip, 
  Legend } from 'chart.js';

import { useEffect, useRef } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Image from 'next/image';


Chart.register(PieController, ArcElement, ChartDataLabels, Tooltip, Legend);

// Données du demi-cercle
const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const PerformanceChart = () => {
    
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'doughnut',
        data,
        options: {
          responsive: true,
          rotation: -90, // démarre à gauche
          circumference: 57* (Math.PI), // demi-cercle
          cutout: "70%",
          plugins: {
            datalabels: {
              formatter: (value, context) => {
                const rawData = context.chart.data.datasets[0].data as number[];
                const total = rawData.reduce((acc, val) => acc + val, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${percentage}%`;
              },
              color: '#000',
              anchor: 'center',
              align: 'center',
            },
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
        },
      });
    }

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <div className="w-full h-[300px] p-4 rounded-md">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold">Performance (1st Sem)</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <div className="relative w-full h-full flex justify-center">
        <canvas ref={chartRef} className="absolute top-0 w-full h-full" />
        <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-3xl -mt-7 font-bold'>9.2</h1>
          <p className='text-sm text-gray-300'> of 10 max Total Score</p>
        </div>
      </div>
   </div>
    );
};

export default PerformanceChart;
