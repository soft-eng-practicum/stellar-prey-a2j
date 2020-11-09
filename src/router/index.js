import Vue from "vue";
import VueRouter from "vue-router";
import FrontPage from "../views/FrontPage.vue";
import About from "../views/About.vue";
import Clans from "../views/Clans.vue";
import Community from "../views/Community.vue";
import Servers from "../views/Servers.vue";
//import controller from "../controller/controller.js";

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
  {
    path: "//Servers",
    name: "Servers",
    component: Servers
  },
{

    path: "//Login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views//Login.vue")
  },
  {

    path: "//Signup",
    name: "Signup",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views//Signup.vue")
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
  {
    path: "//Servers",
    name: "Servers",
    component: Servers
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
