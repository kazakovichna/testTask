import Vue from 'vue'
import Router from 'vue-router'
import vMainWrapper from '../components/v-main-wrapper'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "main-wrapper",
      component: vMainWrapper
    }
  ]
});

export default router;
