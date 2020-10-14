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
      path: "/cards",
      component: () => import("./pages/Cards.vue")
    },
    {
      path: "/carousel",
      component: () => import("./pages/Carousel.vue")
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
      path: "/table",
      component: () => import("./pages/Table.vue")
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
