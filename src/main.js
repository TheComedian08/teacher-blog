import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyA95whzfkiLw3XblCoYuz1DxZhAQg0Bn5E',
    authDomain: 'teacher-blog-90cb1.firebaseapp.com',
    databaseURL: 'https://teacher-blog-90cb1.firebaseio.com',
    projectId: 'teacher-blog-90cb1',
    storageBucket: 'teacher-blog-90cb1.appspot.com',
    messagingSenderId: '940516618992',
    appId: '1:940516618992:web:6f3973fa675ceb16e8c835'
  })
  .firestore()

const { Timestamp } = firebase.firestore

export { Timestamp, db, firebase }
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
