import * as React from "react";
import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function MuCharts() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("./data/myfile01.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <BarChart
      series={[{ data }]}
      height={290}
      xAxis={[{ data: ["MM1", "MM2", "MM3", "MM4"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}

// replace series by this for multiple data
// series={[
//     { data: [35, 44, 24, 34] },
//     { data: [51, 6, 49, 30] },
//     { data: [15, 25, 30, 50] },
//     { data: [60, 50, 15, 25] },
//   ]}
