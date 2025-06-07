"use client"

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Image from 'next/image';
import attendanceData from "@/data/attendance.json"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Attendance Chart',
    },
  },
};

const labels = attendanceData.map((data) => data.label);

export const data = {
  labels,
  datasets: [
    {
      label: 'Present',
      data: attendanceData.map((data) => data.PresenceValue),
      backgroundColor: attendanceData.map((data) => data.PresencebackgroundColor),
    },
    {
      label: 'Absent',
      data: attendanceData.map((data) => data.AbsenceValue),
      backgroundColor: attendanceData.map((data) => data.AbsencebackgroundColor),
    },
  ],
};

export function App() {
  return <Bar options={options} data={data} />;
}







const AttendanceChart = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl w-full h-full p-4 gap-10">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more options" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="w-full h-[75%] relative">
         <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default AttendanceChart;
