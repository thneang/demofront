<script setup lang="js">
import { ref } from "vue";
import StockService from "@/components/chart/stockservice";

const stockService = new StockService();
let table = ref([]);
stockService.addListener((data) => console.log(data));
stockService.addListener((data) => table.value = data);
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title>Real time Stock Market Data</v-card-title>
      <v-card-text>
        <v-table v-if="table.length > 0">
            <thead>
            <tr>
                <th class="text-left">
                Company
                </th>
                <th class="text-left">
                Price
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in table"
                :key="item.company"
            >
                <td>{{ item.company }}</td>
                <td>{{ item.value }} $</td>
            </tr>
            </tbody>
        </v-table>
        <template v-else>Loading data... It can take a few seconds, my server is cheap :(</template>
      </v-card-text>
    </v-card>
  </v-container>
</template>
