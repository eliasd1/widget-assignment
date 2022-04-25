import React, { Children } from "react";

import "./styles.css";

interface WidgetsContainerProps {
  children: React.ReactNode;
}

const WidgetsContainer = ({ children }: WidgetsContainerProps) => {
  const arrayChildren = Children.map(
    children,
    (child: React.ReactElement, index: number) => {
      return React.cloneElement(child, {
        column: (index % 5) + 1,
        row: Math.floor(index / 5) + 1,
        order: index,
      });
    }
  );

  arrayChildren?.sort(
    (a, b) =>
      (a.props.priority || Number.MAX_VALUE) -
      (b.props.priority || Number.MAX_VALUE)
  );
  console.log(arrayChildren);
  return <div className="widgets-container">{arrayChildren}</div>;
};

export default WidgetsContainer;
