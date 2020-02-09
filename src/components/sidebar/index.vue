<template>
  <v-navigation-drawer app v-model="isShow" color="blue">
    <v-list class="d-flex flex-column justify-space-between" height="100%">
      <v-list-item-group>
        <v-list-item link to="/">
          <v-list-item-title>Главная</v-list-item-title>
          <v-list-item-icon><v-icon>view_day</v-icon></v-list-item-icon>
        </v-list-item>
        <v-list-item link to="/news">
          <v-list-item-title>Новости</v-list-item-title>
          <v-list-item-icon><v-icon>description</v-icon></v-list-item-icon>
        </v-list-item>
        <v-list-item link to="/create">
          <v-list-item-title>Создать статью</v-list-item-title>
          <v-list-item-icon><v-icon>create</v-icon></v-list-item-icon>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>Обо мне</v-list-item-title>
          <v-list-item-icon><v-icon>person</v-icon></v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isShowSidebar: Boolean
  },
  computed: {
    isShow: {
      get() {
        return this.isShowSidebar
      },
      set(isShow) {
        this.$emit('toggleSidebar', isShow)
      }
    }
  }
}
</script>
