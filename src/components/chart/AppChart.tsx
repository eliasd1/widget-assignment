import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  YAxis,
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
} from "recharts";

export type ChartType = "line" | "bar" | "scatter" | "pie";

interface AppChartProps {
  chart: any;
}

const AppChart = React.memo(({ chart }: AppChartProps) => {
  if (!chart?.type) {
    return null;
  }
  if (chart.type === "line") {
    return (
      <ResponsiveContainer width="100%" aspect={1} maxHeight={300}>
        <LineChart data={chart.data}>
          <XAxis dataKey={chart.xAxisKey} />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey={chart.line1Key}
            stroke="#ff7300"
            yAxisId={0}
          />
          <Line
            type="monotone"
            dataKey={chart.line2Key}
            stroke="#387908"
            yAxisId={1}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  if (chart.type === "bar") {
    return (
      <ResponsiveContainer aspect={1} maxHeight={300}>
        <BarChart data={chart.data}>
          <Bar dataKey="students" fill="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  if (chart.type === "scatter") {
    return (
      <ResponsiveContainer aspect={1} maxHeight={300}>
        <ScatterChart width={400} height={400}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <Scatter data={chart.data} fill="green" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
  return (
    <ResponsiveContainer aspect={1} maxHeight={300}>
      <PieChart>
        <Pie data={chart.data} dataKey={chart.dataKey} />
      </PieChart>
    </ResponsiveContainer>
  );
});

export default AppChart;
//
