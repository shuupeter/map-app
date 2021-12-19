import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userUid: null,
    userName: null,
    imageURL: null,
    uploadFile: null,
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
    imageURL: state => state.imageURL,
    userName: state => state.userName,
    // imageURL: state => state.imageURL,
    uploadFile: state => state.uploadFile,
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
    },
    // upload (state){
    //     //Firebase Store上での画像URL
    //     state.imageURL = 'tmp/' + state.uploadFile.name
    //     //アップロード
    //     const storageRef = firebase.storage().ref().child(state.imageURL);
    //     storageRef.put(state.uploadFile).then(function (snapshot) {
    //         console.log('Uploaded a blob or file!');
    //         console.log(snapshot)
    //     });
    // },
    // initialize (state) {
    //   state.imageURL = null;
    //   state.uploadFile = null;
    // },
  },
  // actions: {
    //mutation : uploadへ
    // selectFile: function ({ commit }, e) {
    //     e.preventDefault();
    //     let files = e.target.files;
    //     commit('uploadFile', files[0])
    // },


  //   upload: function ({ commit }) {
  //       commit('upload')
  //   },
  //   initialize: function({ commit }){
  //       commit('initialize')
  //   }
  // }
})