import React from "react";
import AppChart from "../chart/AppChart";

// import { fetchData } from "./helpers";
import { WidgetProps } from "./types";
import CSS from "csstype";

const Widget = React.memo(
  ({
    apiUrl,
    chart,
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

    return (
      <div style={widgetStyles} className="widget">
        {title && <h3 className="widget-title">{title}</h3>}

        {chart && chart.type && <AppChart chart={chart} />}
        <div className="widget-content">{children}</div>
      </div>
    );
  }
);

export default Widget;
