<template lang="pug">
  #wrapper
    .has-text-centered
      img#foo(src='~assets/images/single3.png')

    .container
      .box
        .columns
          .game-screen.column.is-8
            players
            board
            // result
            // human

          .column.is-4
            .com(style="margin-bottom: 30px;")
              computer
            tutorials

</template>

<script>
import Tutorials from "~/components/pages/single/Tutorials.vue";
import Computer from "~/components/pages/single/Computer.vue";
import Players from "~/components/pages/single/Players.vue";
import Board from "~/components/pages/single/Board.vue";
import $ from "jquery";

export default {
  created() {
    if (process.browser) {
      //$("#wrapper").animateBackground(272, 272, 1, 1, 50);
    }
  },
  components: {
    Tutorials,
    Computer,
    Players,
    Board
  }
};
</script>

<style scoped>
#wrapper {
  background: url("/images/bg.png");
}
</style>
