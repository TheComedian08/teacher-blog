<template>
  <v-card height="100%">
    <v-card-title>Новости</v-card-title>
    <v-card-text class="d-flex justify-space-between flex-column">
      <v-hover v-slot:default="{ hover }" v-for="(article, index) in articles" :key="index">
        <v-card flat :elevation="hover ? 12 : 2" style="margin-bottom: 16px">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ new Date(article.createdAt.seconds * 1000).toLocaleString('ru') }}</v-card-subtitle>
          <v-card-text>{{ article.text }}</v-card-text>
          <v-card-actions class="d-flex justify-space-between">
            <v-btn icon link :to="/article/ + article.id">
              <v-icon>visibility</v-icon>
            </v-btn>
            <v-btn icon @click="deleteArticle(article.id)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-card-text>
  </v-card>
</template>

<script>
import { db } from '../main'

export default {
  name: 'News',
  data: () => ({
    articles: [
      {
        title: 'Последняя новость',
        date: new Date().toLocaleString('ru'),
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus voluptate harum quas vel aliquid delectus expedita aliquam nesciunt cum. Laboriosam quam iste libero optio rerum voluptatibus ab explicabo in.'
      },
      {
        title: 'Предпоследняя новость',
        date: new Date().toLocaleString('ru'),
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus voluptate harum quas vel aliquid delectus expedita aliquam nesciunt cum. Laboriosam quam iste libero optio rerum voluptatibus ab explicabo in.'
      },
      {
        title: 'Новость',
        date: new Date().toLocaleString('ru'),
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus voluptate harum quas vel aliquid delectus expedita aliquam nesciunt cum. Laboriosam quam iste libero optio rerum voluptatibus ab explicabo in.'
      }
    ]
  }),
  firestore() {
    return {
      articles: db.collection('articles')
    }
  },
  methods: {
    goToArticle(id) {
      this.$router.push('/article/' + id)
    },
    deleteArticle(id) {
      db.collection('articles')
        .doc(id)
        .delete()
    }
  }
}
</script>
