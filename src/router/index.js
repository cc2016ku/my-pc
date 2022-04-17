import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/home.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/components/setting.vue"),
  },
  {
    path: "/goods",
    name: "goods",
    component: () => import("@/components/goods.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
