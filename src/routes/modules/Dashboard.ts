import LayOut from "@/layouts/index.vue";
import { AppRouteRecordRaw } from "../type";

export default <AppRouteRecordRaw>{
  path: "/dashboard",
  name: "Dashboard",
  component: LayOut,
  hasLayOut: true,
  children: [
    {
      name: "分析页",
      path: "/dashboard/analysis",
      component: () => import("@/views/dashboard/index.vue"),
    },
  ],
};
