import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
  },
  {
    path: "/login", //登录页
    name: "login",

    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/home", //布局页
    name: "home",
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/index", //首页
        name: "index",
        component: () => import("../views/home/index/index.vue"),
      },
      {
        path: "/stats", //数据管理
        name: "stats",
        component: () => import("../views/home/stats/index.vue"),
      },
      {
        path: "/wms", //信息管理
        name: "wms",
        component: () => import("../views/home/wms/index.vue"),
        children: [
          {
            path: "/wms/list", //信息liec
            name: "wmsList",
            component: () => import("../views/home/wms/list.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
