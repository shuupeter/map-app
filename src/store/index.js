import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userUid: null,
    userName: null,
    // imageURL: null,
    uploadFile: null,
    docId: null,
  }, 
  getters: {
    idToken: state => state.idToken,
    userUid: state => state.userUid,
    imageURL: state => state.imageURL,
    userName: state => state.userName,
    // imageURL: state => state.imageURL,
    uploadFile: state => state.uploadFile,
    docId: state => state.docId,
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
    setdocId(state, docId) { 
      state.docId = docId;
    },
    uploadFile(state, uploadFile) { 
      state.uploadFile = uploadFile;
    },
  },
})