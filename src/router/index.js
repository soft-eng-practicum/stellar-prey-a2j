import Vue from "vue";
import VueRouter from "vue-router";
import FrontPage from "../views/FrontPage.vue";
import About from "../views/About.vue";
<<<<<<< HEAD
// import Login from "../views/Login.vue";
=======
import Clans from "../views/Clans.vue";
import Community from "../views/Community.vue";
import Servers from "../views/Servers.vue";
>>>>>>> fd337b43d54c2369cd684b4ca57b21965adc1818

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
<<<<<<< HEAD
    path: "//Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views//Login.vue")
  },
 


=======
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
>>>>>>> fd337b43d54c2369cd684b4ca57b21965adc1818

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
