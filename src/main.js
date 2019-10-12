// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '@/common/firebaseConfig';
import store from '@/store/index';
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.use(Vuex);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import Vue App, routes, store
import App from './App';
import routes from './routes';

Vue.use(VueRouter);

// Configure router
export const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    i18n
  });
});
