import React from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Assignment 1",
    "Assignment 2",
    "Assignment 3",
    "Assignment 4",
    "Assignment 5",
    "Assignment 6",
    "Assignment 7",
  ],
  datasets: [
    {
      label: "Mark",
      data: [60, 50, 40, 50, 40, 55],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};
const Statistics = () => {
    return (
      <div className="my_container lg:w-3/6 mt-5">
        
        <PolarArea data={data}  />;
      </div>
    );
};

export default Statistics;