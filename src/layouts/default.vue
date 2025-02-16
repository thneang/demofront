<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation"></v-list-item>
        <template v-for="route in routes">
          <v-list-item v-if="route.path != '/'" :title=route.path.substring(1) :key="route.name" :to="route.path" router></v-list-item>
        </template>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar title="thomasdev.cloud"></v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import { routes } from 'vue-router/auto-routes'

function navigateTo(path: String) {

}

</script>
