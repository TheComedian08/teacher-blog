<template>
  <v-app-bar app color="blue">
    <v-app-bar-nav-icon @click.stop="toggleSidebar(!isShowSidebar)" />
    <v-toolbar-title color="red"> Блог педагога {{ dateTime.toLocaleString('ru') }} </v-toolbar-title>
    <v-spacer />
    <v-tooltip bottom v-if="!currentUser">
      <template v-slot:activator="{ on }">
        <v-btn @click="handleLoginDialog" icon v-on="on">
          <v-icon>
            input
          </v-icon>
        </v-btn>
      </template>
      <span>Войти</span>
    </v-tooltip>
    <template v-else>
      <div>{{ currentUser.email }}</div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="sighOut" icon v-on="on">
            <v-icon>
              exit_to_app
            </v-icon>
          </v-btn>
        </template>
        <span>Выйти</span>
      </v-tooltip>
    </template>
    <LoginDialog :isShowLoginDialog="isShowLoginDialog" @handleLoginDialog="handleLoginDialog" />
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import { LoginDialog } from '../dialogs'

export default {
  name: 'Header',
  components: {
    LoginDialog
  },
  props: {
    isShowSidebar: Boolean
  },
  data: () => ({
    dateTime: new Date(),
    isShowLoginDialog: false,
    currentUser: null,
    isFirstVisit: true
  }),
  methods: {
    toggleSidebar(isShow) {
      this.$emit('toggleSidebar', isShow)
    },
    sighOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.currentUser = null
          this.isShowLoginDialog = false
        })
    },
    handleLoginDialog() {
      this.isShowLoginDialog = !this.isShowLoginDialog
    }
  },
  created() {
    setInterval(() => (this.dateTime = new Date()), 1000)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user
        this.isFirstVisit = false
      } else {
        if (this.isFirstVisit) {
          this.isShowLoginDialog = true
        }
      }
    })
  }
}
</script>
