<template>
  <v-lazy>
    <v-card>
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-subtitle>{{ new Date(article.createdAt.seconds * 1000).toLocaleString('ru') }}</v-card-subtitle>
      <v-card-text>{{ article.text }}</v-card-text>
    </v-card>
  </v-lazy>
</template>

<script>
import { db } from '../main'

export default {
  name: 'Article',
  data: () => ({
    article: {
      title: '',
      text: '',
      createdAt: {
        seconds: 0
      }
    }
  }),
  created() {
    this.$bind('article', db.collection('articles').doc(this.$route.params.id))
  }
}
</script>
