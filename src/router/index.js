import Vue from "vue";
import VueRouter from "vue-router";
import FrontPage from "../views/FrontPage.vue";
import About from "../views/About.vue";
import Clans from "../views/Clans.vue";
import Community from "../views/Community.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPage
  },
  {
    path: "//players",
    name: "Players",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views//Players.vue")
  },
  {
    path: "//About",
    name: "About",
    component: About
  },
  {
    path: "//Clans",
    name: "Clans",
    component: Clans
  },
  {
    path: "//Community",
    name: "Community",
    component: Community
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
