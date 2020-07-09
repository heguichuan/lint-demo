import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";
Vue.use(VueRouter);

import "./common.less";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./home.vue"),
    },
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
