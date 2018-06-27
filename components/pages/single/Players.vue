<template>
  <div class="columns">
    <div class="column computer">
      <span class="info">
        <img :src="computerImg" :class="computerAnim"> <br> {{ computerName }} <br> 後手
      </span>
    </div>
    <div class="column player">
      <span class="info">
        <img :src="playerImg" :class="playerAnim"> <br> {{ playerName }} <br> 先手
      </span>
    </div>
    <button @click="click">Anim</button>
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
      return this.avatarPath(this.$store.state.single.computer.id);
    },
    playerImg() {
      return this.avatarPath(this.$store.state.single.player.id);
    },
    computerName() {
      return this.$store.state.single.computer.name + "(COM)";
    },
    playerName() {
      return this.$store.state.single.player.name + "(あなた)";
    },
    computerAnim() {
      return this.$store.state.single.computerAnim;
    },
    playerAnim() {
      return this.$store.state.single.playerAnim;
    }
  },
  methods: {
    avatarPath(id) {
      return `/images/avators/${id}.png`;
    },
    click() {
      console.log("CLICK ANIM BUTTON");
      this.$store.dispatch("single/anim", {
        target: "player",
        key: "bounce infinite",
        time: 3000
      });
      this.$store.dispatch("single/anim", {
        target: "computer",
        key: "bounce infinite",
        time: 3000
      });
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
