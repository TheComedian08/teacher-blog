<template>
  <v-card height="100%">
    <v-card-title>Создать статью</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="Заголовок" v-model="article.title" />
        <v-textarea label="Основной текст" v-model="article.text" />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn text right color="green" @click="addArticle">Создать</v-btn>
      <v-btn text right color="red" @click="resetArticle">Сбросить</v-btn>
    </v-card-actions>
    <v-snackbar v-model="isShowSnackbar">
      Статья создана
    </v-snackbar>
  </v-card>
</template>

<script>
import { db, Timestamp } from '../main'

export default {
  name: 'NewArticle',
  data() {
    return {
      article: {
        title: '',
        text: ''
      },
      isShowSnackbar: false
    }
  },
  methods: {
    addArticle() {
      const article = this.article
      db.collection('articles')
        .add({
          ...article,
          createdAt: Timestamp.fromDate(new Date())
        })
        .then(() => {
          this.isShowSnackbar = true
          this.resetArticle()
        })
    },
    resetArticle() {
      this.article = {
        title: '',
        text: ''
      }
    }
  }
}
</script>
