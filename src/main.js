import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import moment from "moment" 
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(moment)
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App),
}).$mount("#app");
