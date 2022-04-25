import React, { useMemo } from "react";

import { modifyChildren } from "./helpers";
import { WidgetsContainerProps } from "./types";
import "./styles.css";

const WidgetsContainer = ({ children }: WidgetsContainerProps) => {
  const modifiedChildren = useMemo(() => modifyChildren(children), [children]);

  return <div className="widgets-container">{modifiedChildren}</div>;
};

export default WidgetsContainer;
