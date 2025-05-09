import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import authRoutes from "./auth";
import dashboardRoutes from "./dashboard";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  ...authRoutes,
  ...dashboardRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard for protected routes
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const isAuthenticated = localStorage.getItem("token"); // You can modify this based on your auth logic
//   if (requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
