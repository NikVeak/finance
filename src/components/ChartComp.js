import React from "react";
import { Line } from "react-chartjs-2";

const ChartComp = ({chartData}) => {


  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "Forecast gold",
          fontSize: 20
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={chartData}
    />
  );
};
export default ChartComp;