import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import infiniteScroll from "vue-infinite-scroll";
import BackToTop from "vue-backtotop";

import router from "./router";
import store from "./vuex/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(infiniteScroll);
Vue.use(BackToTop);

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
