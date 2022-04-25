import React, { useEffect, useState } from "react";
import AppChart from "../chart/AppChart";

import { fetchData } from "./helpers";
import { WidgetProps } from "./types";
import CSS from "csstype";

const Widget = React.memo(
  ({
    apiUrl,
    chart,
    chartType,
    children,
    gridColumnSpan,
    gridColumnStart,
    gridRowSpan,
    gridRowStart,
    order,
    title,
  }: WidgetProps) => {
    const widgetStyles: CSS.Properties = {
      order,
      gridColumnStart,
      gridRowStart,
      gridColumn: `${gridColumnStart || "auto"}/span ${
        gridColumnSpan || "auto"
      }`,
      gridRow: `${gridRowStart || "auto"}/span ${gridRowSpan || "auto"}`,
    };
    const [chartData, setChartData] = useState(chart);

    useEffect(() => {
      if (apiUrl) {
        const fetchedData = fetchData(apiUrl);
        setChartData(fetchedData);
      }
    }, [apiUrl]);

    return (
      <div style={widgetStyles} className="widget">
        {title && <h3 className="widget-title">{title}</h3>}
        {chartType && <AppChart type={chartType} chart={chartData} />}
        <div className="widget-content">{children}</div>
      </div>
    );
  }
);

export default Widget;
