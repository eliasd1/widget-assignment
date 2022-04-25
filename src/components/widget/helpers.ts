import React, { Children } from "react";

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export const modifyChildren = (children: React.ReactNode) => {
  const arrayChildren = Children.map(
    children,
    (child: React.ReactElement, index: number) => {
      return React.cloneElement(child, {
        order: index,
      });
    }
  );

  arrayChildren?.sort(
    (a, b) =>
      (a.props.priority || Number.MAX_VALUE) -
      (b.props.priority || Number.MAX_VALUE)
  );

  return arrayChildren;
};
