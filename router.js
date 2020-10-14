import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/about",
      component: () => import("./pages/About.vue")
    },
    {
      path: "/button",
      component: () => import("./pages/Button.vue")
    },
    {
      path: "/skeleton",
      component: () => import("./pages/Skeleton.vue")
    },
    {
      path: "/avatar",
      component: () => import("./pages/Avatar.vue")
    }
  ]
});
