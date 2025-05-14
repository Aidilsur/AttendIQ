<script setup lang="ts">
import { CardAttendance, CardPerformance, CardTop } from "./component";
</script>

<template>
  <div class="flex gap-4">
    <div class="w-3/4 h-full space-y-4">
      <CardAttendance />
      <div class="flex item-center gap-4 h-full">
        <CardPerformance />
        <CardPerformance />
      </div>
    </div>
    <div class="w-1/4 h-full">
      <CardTop />
    </div>
  </div>
</template>

<style scoped></style>
