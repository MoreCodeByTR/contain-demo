import { createRouter, createWebHashHistory } from "vue-router";
export const routes = [
  {
    path: "/",
    name: "导航栏",
    component: () => import("@/page/home_page.vue"),
  },
  {
    path: "/contain_size",
    name: "Contian Size",
    component: () => import("@/page/contain_size.vue"),
  },
  {
    path: "/contain_paint",
    name: "Contian Paint",
    component: () => import("@/page/contain_paint.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});
