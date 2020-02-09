<template>
  <v-app>
    <Header @toggleSidebar="toggleSidebar" :isShowSidebar="isShowSidebar" />
    <Sidebar :isShowSidebar="isShowSidebar" @toggleSidebar="toggleSidebar" />
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
  }
}
</script>

<style>
html {
  overflow: hidden;
}
</style>
