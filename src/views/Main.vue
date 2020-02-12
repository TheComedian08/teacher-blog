<template>
  <v-card height="100%">
    <v-card-title>Главная</v-card-title>
    <v-card-text class="d-flex flex-nowrap justify-space-around">
      <v-card height="80%" width="50%">
        <v-card-title>Краткая информация о сайте</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet tempore distinctio? Nobis blanditiis
          cumque facilis odio ducimus? Vitae itaque consequatur sunt ex! Aliquid pariatur itaque vero odit quidem fuga.
        </v-card-text>
      </v-card>
      <v-divider vertical />
      <v-card height="80%" width="50%" v-if="lastRecord.title" link :to="'/article/' + lastRecord.id">
        <v-card-title>{{ lastRecord.title }}</v-card-title>
        <v-card-subtitle>{{ new Date(lastRecord.createdAt.seconds * 1000).toLocaleString('ru') }}</v-card-subtitle>
        <v-card-text>{{ lastRecord.text }}</v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { db } from '../main'

export default {
  name: 'Main',
  data() {
    return {
      articles: [
        {
          title: '',
          text: '',
          createdAt: {
            nanoseconds: null,
            seconds: null
          }
        }
      ],
      lastRecord: {
        title: '',
        text: '',
        createdAt: {
          nanoseconds: null,
          seconds: null
        }
      }
    }
  },
  async created() {
    //TODO
    await this.$bind('articles', db.collection('articles'))
    this.lastRecord = this.articles[0]
  }
}
</script>
