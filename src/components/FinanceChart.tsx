"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";  
import { Line } from "react-chartjs-2";
import financeData from "@/data/financeData.json";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = financeData.map((data) => data.label);

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Financial Results (Millions of FCFA)",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: financeData.map((data) => data.Incomevalue),
      borderColor: financeData.map((data) => data.IncomebackgroundColor),
      backgroundColor: financeData.map((data) => data.IncomeborderColor),
      yAxisID: "y",
    },
    {
      label: "Expenses",
      data: financeData.map((data) => data.ExpensValue),
      borderColor: financeData.map((data) => data.ExpensborderColor),
      backgroundColor: financeData.map((data) => data.ExpensbackgroundColor),
      yAxisID: "y1",
    },
  ],
};

const FinanceChart = () => {
  return (
    <div className="w-full rounded-xl p-4 shadow-md">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="Options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="w-full h-[450px] relative">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default FinanceChart;
