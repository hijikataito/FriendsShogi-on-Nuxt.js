<template>
  <div class="columns">
    <div class="column computer">
      <span class="info">
        <img :src="computerImg"> <br> {{ computerName }} <br> 後手
      </span>
    </div>
    <div class="column player">
      <span class="info">
        <img :src="playerImg"> <br> {{ playerName }} <br> 先手
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    computerImg() {
      const id = this.$store.state.single.computer.id;
      return `/images/avators/${id}.png`;
    },
    playerImg() {
      const id = this.$store.state.single.player.id;
      return `/images/avators/${id}.png`;
    },
    computerName() {
      return this.$store.state.single.computer.name;
    },
    playerName() {
      return this.$store.state.single.player.name + "（あなた）";
    }
  }
};
</script>

<style scoped>
.player {
  text-align: right;
}
.info {
  display: inline-block;
  text-align: center;
}
</style>
