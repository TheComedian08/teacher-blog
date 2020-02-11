<template>
  <v-app-bar app color="blue">
    <v-app-bar-nav-icon @click.stop="toggleSidebar(!isShowSidebar)" />
    <v-toolbar-title>
      Блог педагога
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>{{ dateTime.toLocaleString('ru') }}</v-toolbar-title>
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
