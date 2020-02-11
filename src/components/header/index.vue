<template>
  <v-app-bar app color="blue">
    <v-app-bar-nav-icon @click.stop="toggleSidebar(!isShowSidebar)" />
    <v-toolbar-title>
      Блог педагога
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>{{ dateTime.toLocaleString('ru') }}</v-toolbar-title>
    <v-switch hide-details v-model="$vuetify.theme.dark" style="margin-left: 10px" label="Темная тема" color="black" />
    <v-btn @click="sighOut">sign out</v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Header',
  props: {
    isShowSidebar: Boolean
  },
  data: () => ({
    dateTime: new Date()
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
          console.log('yee')
        })
    }
  },
  created() {
    setInterval(() => (this.dateTime = new Date()), 1000)
  }
}
</script>
