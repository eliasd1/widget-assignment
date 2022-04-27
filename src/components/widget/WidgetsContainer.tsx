import React, { useEffect } from "react";

// import { modifyChildren } from "./helpers";
import useWidgets from "./hooks/useWidgets";
import Widget from "./Widget";
import "./styles.css";

interface WidgetProps {
  id: number;
  title: string;
  priority: number;
  [key: string]: any;
}

const WidgetsContainer = () => {
  const { widgets, fetchWidgets } = useWidgets();

  useEffect(() => {
    fetchWidgets();
  }, [fetchWidgets]);

  return (
    <div className="widgets-container">
      {widgets.map((widget: WidgetProps) => {
        return <Widget key={widget.id} {...widget} />;
      })}
    </div>
  );
};

export default WidgetsContainer;
