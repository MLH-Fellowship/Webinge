import Vue from "vue";
import VModal from "vue-js-modal";
import App from "./App.vue";
import router from "@/router/index";

Vue.config.productionTip = false;
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
