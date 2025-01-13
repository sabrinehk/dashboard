"use client";
import React from "react";
import Image from "next/image";
import { Coronavirus } from "@mui/icons-material";
import imageVirus from "@/public/images/virus.webp";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 overflow-auto">
      <div className="flex flex-row-reverse flex-wrap w-full gap-2 justify-around items-center">
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-green-100 text-green-800">
          <Coronavirus fontSize="large" />
          <span>Marburg virus</span>
          <span>1967</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-blue-100 text-blue-800">
          <Coronavirus fontSize="large" />
          <span>Ebola virus</span>
          <span>1976</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-purple-100 text-purple-800">
          <Coronavirus fontSize="large" />
          <span>Rabies</span>
          <span>1920</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-rose-100 text-rose-800">
          <Coronavirus fontSize="large" />
          <span>HIV</span>
          <span>1980</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-orange-100 text-orange-800">
          <Coronavirus fontSize="large" />
          <span>Astrovirus</span>
          <span>1975</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-sky-100 text-sky-800">
          <Coronavirus fontSize="large" />
          <span>Smallpox</span>
          <span>1949</span>
        </div>
        <div className="w-32 h-40 font-bold text-xs shadow-2xl flex flex-col justify-center gap-2 p-2 items-center rounded-lg bg-white text-purple-800">
          <Coronavirus fontSize="large" />
          <span>Nairovirus</span>
          <span>1960</span>
        </div>
      </div>
      <div className="flex flex-row-reverse flex-wrap md:!flex-nowrap gap-2 px-8 items-center w-full justify-between">
        <div className="md:!w-[40%] w-full flex justify-center items-center">
          <Image
            width={430}
            height={430}
            className="object-contain"
            alt="virus"
            src={imageVirus}
          />
        </div>
        <div className="md:!w-[60%] w-full pt-5">
          <ApexCharts
            series={[
              {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 100],
              },
              {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41],
              },
            ]}
            options={{
              chart: {
                height: 350,
                type: "area",
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: "smooth",
              },
              xaxis: {
                type: "datetime",
                categories: [
                  "2018-09-19T00:00:00.000Z",
                  "2018-09-19T01:30:00.000Z",
                  "2018-09-19T02:30:00.000Z",
                  "2018-09-19T03:30:00.000Z",
                  "2018-09-19T04:30:00.000Z",
                  "2018-09-19T05:30:00.000Z",
                  "2018-09-19T06:30:00.000Z",
                ],
              },
              tooltip: {
                x: {
                  format: "dd/MM/yy HH:mm",
                },
              },
            }}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
