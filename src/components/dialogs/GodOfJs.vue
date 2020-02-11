<template>
  <v-dialog v-model="isShow" width="25%">
    <v-card>
      <v-card-title>
        Разработчки
      </v-card-title>
      <v-card-subtitle>
        а также те, кто помогал им советами
      </v-card-subtitle>
      <v-card-text>
        <v-list width="100%">
          <v-list-item>
            <v-list-item-icon><v-icon x-large>pets</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Fullstack developer</v-list-item-title>
              <v-list-item-subtitle>
                <a href="https://telegram.im/@ayuka_bg" target="_blank">Аюка Бадма-Гаряев</a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon x-large>text_rotation_angledown</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>UI/UX design</v-list-item-title>
              <v-list-item-subtitle>
                <a href="https://telegram.im/@ayuka_bg" target="_blank">Аюка Бадма-Гаряев</a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon x-large color="yellow">supervised_user_circle</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Главный советчик</v-list-item-title>
              <v-list-item-subtitle>
                <a href="https://market.yandex.ru" target="_blank">Владимир Черкасов</a></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon x-large color="red">favorite</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Лучшая аниме девочка</v-list-item-title>
              <v-list-item-subtitle
                ><a
                  target="_blank"
                  href="https://www.google.com/search?q=Senjougahara+Hitagi&rlz=1C1PRFI_enRU874RU874&sxsrf=ACYBGNTdw2xV1VeFFRrEWKkw1xhP-g2n0Q:1581454389120&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjE8N3YsMrnAhUjxosKHSMHDz0Q_AUoAXoECA0QAw&biw=1536&bih=763"
                  >Senjougahara Hitagi</a
                ></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'GodOfJs',
  props: {
    isShowDialog: Boolean
  },
  computed: {
    isShow: {
      get() {
        return this.isShowDialog
      },
      set() {
        this.$emit('handleDialog')
      }
    }
  }
}
</script>
