import Vue from "vue";
import VueRouter from "vue-router";
import FrontPage from "../views/FrontPage.vue";
import About from "../views/About.vue";
import Clans from "../views/Clans.vue";
import Community from "../views/Community.vue";
import Servers from "../views/Servers.vue";
//<<<<<<< HEAD
//=======



//>>>>>>> e8a8bc608e2e7fe9351b8eb860ba7d1b6bc70274

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
//<<<<<<< HEAD
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
//=======
// >>>>>>> e8a8bc608e2e7fe9351b8eb860ba7d1b6bc70274
    path: "//Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views//Login.vue")
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
