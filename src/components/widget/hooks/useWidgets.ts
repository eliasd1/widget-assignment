import { useCallback, useEffect, useState } from "react";

const WIDGETS_API_ENDPOINT =
  "https://run.mocky.io/v3/5f401806-fdab-4f94-85c3-146a0f32e37c";

const WIDGETS_DATA_ENDPOINT = [
  "https://run.mocky.io/v3/3b663339-3a2e-4dd7-9729-ce346b22ac2c",
  "https://run.mocky.io/v3/16a48c0d-ccbc-4eea-8a93-756def48978e",
];

const getWidgetDataUrl = (priority: number) => {
  return WIDGETS_DATA_ENDPOINT[priority - 1];
};

const getData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export interface WidgetProps {
  id: number;
  title?: string;
  priority: number;
  [key: string]: any;
}

const useWidgets = () => {
  const [widgets, setWidgets] = useState<WidgetProps[]>([]);
  const [currentPriority, setCurrentPriorty] = useState(1);

  const fetchWidgetData = useCallback(async () => {
    try {
      const data = await getData(getWidgetDataUrl(currentPriority));
      setCurrentPriorty((prev) => ++prev);
      const updatedWidgets = widgets.map((widget) => {
        if (widget.chart?.widgetId) return widget;
        const foundData = data.find((d: any) => d.widgetId === widget.id);
        if (!foundData) return widget;
        widget.chart = foundData;
        return widget;
      });
      setWidgets(updatedWidgets);
    } catch (error) {
      console.log("error", error);
    }
  }, [currentPriority, widgets]);

  const fetchWidgets = useCallback(async () => {
    const response = await fetch(WIDGETS_API_ENDPOINT, {});
    setWidgets((await response.json()).widgets);
  }, []);

  useEffect(() => {
    if (widgets.length) {
      fetchWidgetData();
    }
  }, [widgets, fetchWidgetData]);

  return { widgets, fetchWidgets };
};

export default useWidgets;
