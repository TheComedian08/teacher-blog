<template>
  <v-card height="100%">
    <v-card-title>Создать статью</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="Заголовок" />
        <v-textarea label="Основной текст" />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn text right color="green">Создать</v-btn>
      <v-btn text right color="red">Сбросить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewArticle'
}
</script>
