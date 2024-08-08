import { createRouter, createWebHistory } from "vue-router";
import { AppRouteRecordRaw } from "./type";
import { RouteRecordRaw } from "vue-router";
import { useUser } from "@/store";
import LayOut from '@/layouts/index.vue'

const routes: AppRouteRecordRaw[] = [
  { path: "/", redirect: "/index" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/index",
    name: "index",
    meta: { title: "index" },
    component: LayOut,
  },
  {
    path: "/public",
    component: () => import("@/views/public/index.vue"),
  },
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
