<template>
  <v-card height="100%">
    <v-card-title>Новости</v-card-title>
    <v-card-text class="d-flex justify-space-between flex-column">
      <v-hover v-slot:default="{ hover }" v-for="(article, index) in articles" :key="index">
        <v-card flat :elevation="hover ? 12 : 2" style="margin-bottom: 16px">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ article.date }}</v-card-subtitle>
          <v-card-text>{{ article.text }}</v-card-text>
        </v-card>
      </v-hover>
    </v-card-text>
  </v-card>
</template>

<script>
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
  })
}
</script>
