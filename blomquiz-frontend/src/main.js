import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyAS2ZgyT42b9Ff0DUXVbKlyOGhJFe9dYNs",
  authDomain: "blomauth.firebaseapp.com",
  projectId: "blomauth",
  storageBucket: "blomauth.appspot.com",
  messagingSenderId: "42113241521",
  appId: "1:42113241521:web:ecda05d5dc7be808b2ad90"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
