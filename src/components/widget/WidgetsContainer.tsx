import React from "react";

import "./styles.css";

interface WidgetsContainerProps {
  children: React.ReactNode;
}

const WidgetsContainer = ({ children }: WidgetsContainerProps) => {
  return <div className="widget-container">{children}</div>;
};

export default WidgetsContainer;
