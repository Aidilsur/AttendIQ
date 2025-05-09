<script setup lang="ts">
import { Sidebar } from "@/components/ui/sidebar";
import AppSidebarContent from "./AppSidebarContent.vue";
import AppSidebarHeader from "./AppSidebarHeader.vue";
import AppSidebarFooter from "./AppSidebarFooter.vue";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};
</script>

<template>
  <Sidebar variant="floating" collapsible="icon" class="flex flex-col h-screen">
    <AppSidebarHeader />
    <SidebarContent class="flex-1">
      <AppSidebarContent />
    </SidebarContent>
    <AppSidebarFooter :user="data.user" />
  </Sidebar>
</template>
