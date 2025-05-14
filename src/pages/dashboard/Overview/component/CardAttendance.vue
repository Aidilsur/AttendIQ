<script setup lang="ts">
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, TrendingUp, UserX } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4">
    <Card class="w-full shadow-md p-0 overflow-hidden gap-0">
      <CardHeader class="p-4 mb-0">
        <div class="flex items-center gap-3">
          <CheckCircle2 class="text-blue-500" :size="24" />
          <span class="font-medium text-base">Attendance Overview</span>
        </div>
      </CardHeader>
      <CardContent class="px-6 py-6 bg-blue-500 rounded-xl shadow-lg">
        <div class="flex items-center justify-between text-white mb-2">
          <span class="text-sm font-medium">Attendance</span>
          <span class="text-2xl font-bold">80%</span>
        </div>
        <Progress :model-value="80" class="w-full" />
      </CardContent>
    </Card>

    <!-- Performance Card -->
    <Card class="w-full shadow-md p-0 overflow-hidden gap-0">
      <CardHeader class="p-4 mb-0">
        <div class="flex items-center gap-3">
          <TrendingUp class="text-green-500" :size="24" />
          <span class="font-medium text-base">Performance</span>
        </div>
      </CardHeader>
      <CardContent class="px-6 py-6 bg-green-500 rounded-xl shadow-lg">
        <div class="flex items-center justify-between text-white mb-2">
          <span class="text-sm font-medium">Performance Score</span>
          <span class="text-2xl font-bold">75%</span>
        </div>
        <Progress :model-value="75" class="w-full" />
      </CardContent>
    </Card>

    <!-- Absent Card -->
    <Card class="w-full shadow-md p-0 overflow-hidden gap-0">
      <CardHeader class="p-4 mb-0">
        <div class="flex items-center gap-3">
          <UserX class="text-red-400" :size="24" />
          <span class="font-medium text-base">Absent Today</span>
        </div>
      </CardHeader>
      <CardContent class="px-6 py-6 bg-red-400 rounded-xl shadow-lg">
        <div class="flex items-center justify-between text-white mb-2">
          <span class="text-sm font-medium">Absent Today</span>
          <span class="text-2xl font-bold">2</span>
        </div>
        <Progress :model-value="90" class="w-full" />
      </CardContent>
    </Card>
  </div>
</template>
