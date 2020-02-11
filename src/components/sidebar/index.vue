<template>
  <v-navigation-drawer app v-model="isShow" class="d-flex flex-column justify-space-between">
    <v-list class="d-flex flex-column justify-space-between">
      <v-list-item-group>
        <v-list-item link to="/" @click="handleMagic">
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
    <template v-slot:append>
      <div class="pa-2">
        <v-switch
          hide-details
          v-model="$vuetify.theme.dark"
          style="margin-left: 10px"
          label="Темная тема"
          color="black"
        />
      </div>
      <div class="pa-2" v-if="magicCounter > 6">
        <v-btn text @click="handleDialogCreators">
          О создателях
        </v-btn>
      </div>
    </template>
    <GodOfJs :isShowDialog="isShowDialogCreators" @handleDialog="handleDialogCreators" />
  </v-navigation-drawer>
</template>

<script>
import { GodOfJs } from '../dialogs'

export default {
  name: 'Sidebar',
  components: {
    GodOfJs
  },
  props: {
    isShowSidebar: Boolean
  },
  data: () => ({
    magicCounter: 0,
    isShowDialogCreators: false
  }),
  computed: {
    isShow: {
      get() {
        return this.isShowSidebar
      },
      set(isShow) {
        this.$emit('toggleSidebar', isShow)
      }
    }
  },
  methods: {
    handleMagic() {
      this.magicCounter++
    },
    handleDialogCreators() {
      this.isShowDialogCreators = !this.isShowDialogCreators
    }
  }
}
</script>
