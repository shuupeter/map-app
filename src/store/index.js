import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userUid: null,
    userName: null
  }, 
  // actions: {
  //   login() {
  //      login({ commit }) {
  //         console.log('login action')
  //         const provider = new firebase.auth.GoogleAuthProvider();
  //         firebase.auth().signInWithPopup(provider).then(function(result) {
  //          const user = result.user;
  //          console.log('success : ' + user)
  //          console.log('success : ' + user.uid + ' : ' + user.displayName)
  //          commit('setUserUid', user.uid)
  //          commit('setUserName', user.displayName)
  //         }).catch(function(error) {
  //           var errorCode = error.code;
  //           console.log('error : ' + errorCode)
  //         });
  //       }
  //     }
  // },
  getters: {
    idToken: state => state.idToken,
    userUid: state => state.userUid,
    userName: state => state.userName
  },
  mutations: {
    updateIdToken(state, idToken) { 
      state.idToken = idToken;
    },
    setUserUid(state, userUid) { 
      state.userUid = userUid;
    },
    setUserName(state, userName) { 
      state.userName = userName;
    }
  }
})
