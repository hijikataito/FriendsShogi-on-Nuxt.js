<template lang="pug">
  #wrapper
    .has-text-centered
      img(src='~assets/images/single3.png')
    
    .container
      .box
        .columns
          .game-screen.column.is-8
            // Riot Components
            // game
            // human

          .column.is-4
            .com(style="margin-bottom: 30px;")
              // computer
              | Computer
            tutorials

    nuxt-link(to="/") 戻る
</template>

<script>
import Tutorials from "~/components/pages/single/Tutorials.vue";
import $ from "jquery";

export default {
  created() {
    if (process.browser) {
      //$("#wrapper").animateBackground(272, 272, 1, 1, 50);
    }
  },
  components: {
    Tutorials
  }
};
</script>

<style>
.w250 {
  max-width: 250px;
}
.w150 {
  max-width: 150px;
}
</style>
