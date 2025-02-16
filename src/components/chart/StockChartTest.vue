<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Chart, type ChartConfiguration, registerables } from "chart.js";

Chart.register(...registerables);

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let stockChart: Chart | null = null;

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");
    if (ctx) {
      const config: ChartConfiguration = {
        type: "line",
        data: {
          labels: ["time", "", "", "", "", "", "", ""],
          datasets: [
            {
              label: "Stock Prices",
              data: [100, 110, 95, 120, 130],
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
        },
      };

      stockChart = new Chart(ctx, config);
    }
  }
});
</script>

<template>
  <v-card>
    <v-card-title>Stock Prices</v-card-title>
    <v-card-text>
      <canvas ref="chartCanvas"></canvas>
    </v-card-text>
  </v-card>
</template>
