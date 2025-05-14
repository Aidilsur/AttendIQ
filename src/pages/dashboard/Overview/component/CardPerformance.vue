<script setup lang="ts">
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useChart } from "@/hooks/useChart";
import type { ChartData, ChartOptions } from "chart.js";
import { ref, onMounted } from "vue";

const chartRef = ref<HTMLCanvasElement | null>(null);

const chartData: ChartData<"doughnut"> = {
  labels: ["Present", "Permission", "Sick", "Leave"],
  datasets: [
    {
      data: [70, 10, 10, 10],
      backgroundColor: [
        "#3B82F6", // Present - Blue
        "#94A3B8", // Permission - Cool Gray
        "#F87171", // Sick - Soft Red
        "#E5E7EB", // Leave - Light Gray
      ],
      borderWidth: 2,
    },
  ],
};

const chartOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "#6B7280", // Tailwind slate-500
        font: {
          size: 12,
        },
      },
    },
  },
};

onMounted(() => {
  useChart({
    chartRef,
    type: "doughnut",
    data: chartData,
    options: chartOptions,
  });
});
</script>

<template>
  <Card class="w-full h-full shadow-md">
    <CardHeader>
      <span class="text-lg font-semibold">Performance Overview</span>
    </CardHeader>
    <CardContent class="flex item-center my-auto">
      <div class="flex flex-col items-center">
        <canvas ref="chartRef" width="200" height="200"></canvas>
      </div>
    </CardContent>
  </Card>
</template>
