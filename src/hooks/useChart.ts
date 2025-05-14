import {
  Chart,
  type ChartType,
  type ChartData,
  type ChartOptions,
  registerables,
} from "chart.js";
import { type Ref, onBeforeUnmount } from "vue";

Chart.register(...registerables);

let chartInstance: Chart | null = null;

interface UseChartProps {
  chartRef: Ref<HTMLCanvasElement | null>;
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
}

export function useChart({ chartRef, type, data, options }: UseChartProps) {
  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type,
      data,
      options,
    });
  }

  onBeforeUnmount(() => {
    chartInstance?.destroy();
    chartInstance = null;
  });
}
