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
        name: "Overview",
        component: () => import("@/pages/dashboard/Overview/View.vue"),
      },
    ],
  },
];

export default dashboardRoutes;
