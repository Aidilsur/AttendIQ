import type { RouteRecordRaw } from "vue-router";
import AppLayout from "@/components/layout/AppLayout.vue";

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    component: AppLayout,
    // meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/dashboard/Home.vue"),
      },
    ],
  },
];

export default dashboardRoutes;
