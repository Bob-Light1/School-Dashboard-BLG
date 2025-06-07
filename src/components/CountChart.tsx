"use client"

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import Image from 'next/image';
import doughnutData from "@/data/studentData.json"

ChartJS.register(ArcElement, Tooltip, Legend);

const CountChart = () => {
    return (
        <div className=" flex flex-col bg-white rounded-xl w-full h-full p-4 gap-4">

            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>

            {/* CHART */}
            <div className='w-full h-[75%] relative'>
                <Doughnut data = {{
                    labels: doughnutData.map((data) => data.label),
                    datasets: [
                        {
                        label: 'Number',
                        data : doughnutData.map((data) => data.value),
                        backgroundColor: doughnutData.map((data) => data.backgroundColor),
                        borderColor: doughnutData.map((data) => data.borderColor),
                        borderWidth: 4,
                        },
                    ], 
                }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >
                    <Image 
                        src="/maleFemale.png" 
                        alt='' 
                        width={50} 
                        height={50} 
                        className='cover'
                        />
                </div>
            </div>

            {/* BOTTOM*/}
            <div className='flex justify-center gap-16'>
                <div className="flex flex-col gap-1 items-center">
                    <div className="w-5 h-5 bg-Sky rounded-full"/>
                    <h1 className='font-bold'>1.234</h1>
                    <h2 className='text-xs text-gray-300'> Boys (55%)</h2>
                </div>

                <div className="flex flex-col gap-1 items-center">
                    <div className="w-5 h-5 bg-Yellow rounded-full"/>
                    <h1 className='font-bold'>1.200</h1>
                    <h2 className='text-xs text-gray-300'> Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;