import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

//iconify
import { Icon } from "@iconify/vue2";
Vue.component("IconiFy", Icon);

//스타일연결
import style from "./assets/scss/style.scss";

//bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  style,
  render: (h) => h(App),
}).$mount("#app");
