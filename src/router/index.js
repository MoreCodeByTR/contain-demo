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
  {
    path: "/contain_layout",
    name: "Contian Layout",
    component: () => import("@/page/contain_layout.vue"),
  },
  {
    path: "/contain_style",
    name: "Contian Style",
    component: () => import("@/page/contain_style.vue"),
  },
  {
    path: "/dynamic_number",
    name: "滚动数字",
    component: () => import("@/page/dynamic_number.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});
