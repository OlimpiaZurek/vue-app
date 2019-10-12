import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import localForage from 'localforage';
import auth from './modules/auth'

Vue.use(Vuex);

const vuexStorage = new VuexPersist({
  key: 'sourcelink',
  storage: localForage,  
})

export default new Vuex.Store({
  plugins: [vuexStorage.plugin],
  modules: {
    auth,
  },
  strict: process.env.NODE_ENV !== 'production'
});
