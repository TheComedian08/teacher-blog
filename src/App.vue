<template>
  <v-app>
    <Header @toggleSidebar="toggleSidebar" :isShowSidebar="isShowSidebar" v-if="!isLoginOrRegisterPage" />
    <Sidebar :isShowSidebar="isShowSidebar" @toggleSidebar="toggleSidebar" v-if="!isLoginOrRegisterPage" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { Sidebar, Header } from './components'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header
  },
  data: () => ({
    isShowSidebar: true
  }),
  methods: {
    toggleSidebar(isShow) {
      this.isShowSidebar = isShow
    }
  },
  computed: {
    isLoginOrRegisterPage() {
      return this.$route.path.includes('login') || this.$route.path.includes('register')
    }
  }
}
</script>

<style>
html {
  overflow: hidden;
}
</style>
