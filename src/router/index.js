import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home.vue"),
  },
  {
    path: "/my-follow",
    name: "my-follow",
    component: () => import("@/pages/my-follow.vue"),
  },
  {
    path: "/self-setting",
    name: "self-setting",
    component: () => import("@/pages/self-setting.vue"),
  },
  {
    path: "/hot-top",
    name: "hot-top",
    component: () => import("@/pages/hot-top.vue"),
  },
  {
    path: "/info-list",
    name: "info-list",
    component: () => import("@/pages/info-list.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
