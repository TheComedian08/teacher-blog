<template>
  <v-card>
    <v-card-title>Обо мне</v-card-title>
    <v-card-subtitle class="d-flex display-2 justify-space-between">
      <v-img src="@/assets/avatar.png" max-height="400" max-width="200" />
      <span style="line-height: 200px">{{ selfInfo.name }}, {{ selfInfo.job }}</span>
    </v-card-subtitle>
    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ducimus exercitationem deleniti sed aut illo est veniam at adipisci
      iusto sit vero quis architecto inventore nulla a culpa, nesciunt ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Suscipit nesciunt optio quis quaerat numquam repudiandae assumenda reprehenderit a hic ratione labore exercitationem, praesentium
      commodi placeat neque libero sapiente accusantium quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus
      voluptatum. Amet inventore delectus magni quod cum iure incidunt quaerat, temporibus harum obcaecati quibusdam quo ipsam debitis
      cumque voluptatum. Perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corporis blanditiis tenetur in
      voluptas magnam recusandae illum! Eveniet nesciunt quaerat molestiae. Fugiat explicabo vitae commodi, nemo illum maiores ducimus
      earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, iste odit. Itaque ipsam reprehenderit repellat reiciendis
      fugiat illo numquam tempora veritatis repellendus, laudantium atque dolorum consequatur? Rem aliquid labore minima!
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    selfInfo: {
      name: 'Алексей Бадма-Гаряев',
      job: 'педагог'
    },
    schoolInfo: {
      name: 'Элистинская многопрофильная гимназия',
      adress: 'Элиста, 8 мкр'
    }
  })
}
</script>
