import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import UUID from "vue-uuid";
import store from "./store";
Vue.use(UUID);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
}).$mount("#app");
