import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styled from "styled-components";

const Chart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

  const data = {
    labels: ["ISFP", "INFP", "ENFP"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: ["#698269", "#AA5656", "rgba(39, 104, 104, 0.2)"],
        borderColor: ["#DCBC8C"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: "#fff", // color of the label text
        formatter: function (value: any, context: any) {
          // Grab the label for this value
          const label = context.chart.data.labels[context.dataIndex];

          // Format the number with 2 decimal places

          const formattedVal = Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
          }).format(value);

          return `${label}`;
        },
      },
    },
  };
  return (
    <StyledChartContainer>
      <Pie data={data} options={options} />
    </StyledChartContainer>
  );
};

export default Chart;

const StyledChartContainer = styled.div`
  width: 265px;
  height: 265px;
`;
