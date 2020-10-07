// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
//import VueSocketIO from "vue-socket.io";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/styles.css'

Vue.config.productionTip = false;

/*Vue.use(new VueSocketIO({
  debug: false,
  format: 'json',
  connection: 'wss://stream.binance.com:9443/ws/bnbbtc@depth',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))*/

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');
