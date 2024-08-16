import { createRouter, createWebHistory } from "vue-router";
import { AppRouteRecordRaw } from "./type";
import { RouteRecordRaw } from "vue-router";
import { useUser } from "@/store";
import route from "./modules";

export const routes: AppRouteRecordRaw[] = [
  { path: "/", redirect: "/index" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  ...route,
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
});

router.beforeEach((to, from, next) => {
  const { token } = useUser();
  if (token) {
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

export default router;
