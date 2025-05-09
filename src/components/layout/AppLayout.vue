<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar.vue";
</script>

<template>
  <SidebarProvider class="flex h-screen">
    <AppSidebar />
    <main class="flex-1 flex flex-col">
      <div class="flex items-center h-16 px-4 border-b">
        <SidebarTrigger />
      </div>
      <div class="flex-1 p-6 overflow-auto">
        <router-view />
      </div>
    </main>
  </SidebarProvider>
</template>
