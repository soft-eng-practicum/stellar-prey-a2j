//Main Java file

//imports necessary components
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//config setting
Vue.config.productionTip = false;

//mounts and renders the app as well as router and its features
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
