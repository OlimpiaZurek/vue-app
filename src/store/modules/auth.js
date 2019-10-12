import firebase from 'firebase/app';
import 'firebase/auth';
import LOGIN_STATUS from '@/common/consts/loginStatus';
import { router }  from '../../main';
import PATH  from '@/common/consts/pathNames';
import { 
  SET_USER,
  SET_STATUS,
  SET_ERROR
} from './actionTypes';

const state = {
  user: null,
  status: null,
  error:  null,
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  removeUser(state) {
    state.user = null;
  },

  setStatus(state, payload) {
    state.status = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },
};

const signUpSuccess = (commit, response) => {
  router.push(PATH.HOME);
  commit(SET_USER, response.user.uid);
  commit(SET_STATUS, LOGIN_STATUS.SUCCESS);
  commit(SET_ERROR, null);
}

const signUpFailure = (commit, error )=> {
  commit(SET_STATUS, LOGIN_STATUS.FAILURE);
  commit(SET_ERROR, error.message);
}
    
const actions =  {
  signUpAction({ commit }, payload) {
    commit(SET_STATUS, LOGIN_STATUS.LOADING)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => signUpSuccess(commit, response))
      .catch((error) => signUpFailure(commit, error))
    },
    signInAction({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) =>  signUpSuccess(commit,response))
        .catch((error) => signUpFailure(commit,error))
    },
    signInWithSocialAction({ commit }, provider) {
      const authProvider = new firebase.auth[`${provider}AuthProvider`]();
      firebase.auth().signInWithPopup(authProvider)
        .then((response) => signUpSuccess(commit, response))
        .catch((error) =>  signUpFailure(commit, error))
    },
    signOutAction ({ commit }) {
      firebase.auth().signOut()
        .then((response) => {
          router.push(PATH.LOGIN);
          commit(SET_USER, null);
          commit(SET_STATUS, LOGIN_STATUS.SUCCESS);
          commit(SET_ERROR, null);
        })
        .catch((error) => signUpFailure(commit, error))
    }
};

const getters = {
  status(state) {
    return state.status;
  },

  user(state) {
    return state.user;
  },

  error(state) {
    return state.error;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
