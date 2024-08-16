import LayOut from "@/layouts/index.vue";
import { AppRouteRecordRaw } from "../type";

export default <AppRouteRecordRaw>{
  path: "/about",
  name: "详情",
  meta: { title: "about" },
  component: LayOut,
  hasLayOut: true,
  children: [
    {
      path: "/about/ccc",
      name: "ccc",
      component: () => import("@/views/about/index.vue"),
    },
  ],
};
