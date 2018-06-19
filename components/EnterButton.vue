<!-- トップページのしんぐるちほーのボタンなのだ！押すとアニメーションと共にプリプリピーンと音がなるのだ！ -->
<template lang="pug">
  .enter-button
    a.button.is-info(href="/single" @click="click" :class="buttonClass")
      img.animated(src="~assets/images/single3.png" :class="imageClass")
</template>

<script>
export default {
  data() {
    return {
      buttonClass: "",
      imageClass: "pulse infinite"
    };
  },
  methods: {
    click(e) {
      e.preventDefault();
      this.buttonClass = "animated rubberBand";
      this.imageClass = "";
      this.$router.push("single");

      // window.setTimeout(function() {
      //   this.$router.push("single");
      // }, 600);
    }
  }
};
</script>

<style lang="scss" scoped>
.enter-button {
  display: block;
  padding: 0 20px;
}
.small {
  font-size: 0.9rem;
}
.button {
  padding: 60px;
}
@media screen and (max-width: 768px) {
  .button {
    padding: 40px 20px;
  }
}
</style>
