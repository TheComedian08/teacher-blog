<template>
  <v-card>
    <v-card-title>Обо мне</v-card-title>
    <v-card-subtitle>{{ selfInfo.name }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    selfInfo: {
      name: 'Alex'
    }
  })
}
</script>
