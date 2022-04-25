import React from "react";
import CSS from "csstype";

interface WidgetProps {
  title?: string;
  gridColumnStart?: number | "auto";
  gridRowStart?: number | "auto";
  gridColumnSpan?: number;
  gridRowSpan?: number;
  priority?: number;
  span?: number;
  order?: number;
}

const Widget = ({
  title,
  gridColumnStart,
  gridColumnSpan,
  order,
  gridRowStart,
  gridRowSpan,
}: WidgetProps) => {
  const widgetStyles: CSS.Properties = {
    order,
    gridColumnStart,
    gridRowStart,
    gridColumn: `${gridColumnStart || "auto"}/span ${gridColumnSpan || "auto"}`,
    gridRow: `${gridRowStart || "auto"}/span ${gridRowSpan || "auto"}`,
  };

  return (
    <div style={widgetStyles} className="widget">
      {title && <h3 className="widget-title">{title}</h3>}
    </div>
  );
};

export default Widget;
