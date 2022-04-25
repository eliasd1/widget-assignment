import React from "react";
import WidgetContainer from "./components/widget/WidgetsContainer";
import Widget from "./components/widget/Widget";

import { chart, scatterChart, lineChart } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WidgetContainer>
        <Widget title="first" chartType="pie" chart={chart} />
        <Widget title="second" chartType="bar" chart={chart} />
        <Widget title="third" chartType="scatter" chart={scatterChart} />
        <Widget title="fourth">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            repudiandae itaque a consectetur deserunt adipisci, illum odio
            dolores neque inventore veniam alias eum consequatur quaerat culpa
            laboriosam! Commodi, quaerat sapiente?
          </div>
        </Widget>
        <Widget
          priority={1}
          gridColumnSpan={2}
          title="fifth"
          chartType="line"
          chart={lineChart}
        />
      </WidgetContainer>
    </div>
  );
}

export default App;
