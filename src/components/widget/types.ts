import { ChartType } from "../chart/AppChart";

export interface WidgetsContainerProps {
  children: React.ReactNode;
}

export interface WidgetProps {
  apiUrl?: string;
  chart?: any;
  chartType?: ChartType;
  children?: React.ReactNode;
  gridColumnSpan?: number;
  gridColumnStart?: number | "auto";
  gridRowSpan?: number;
  gridRowStart?: number | "auto";
  order?: number;
  priority?: number;
  span?: number;
  title?: string;
}
