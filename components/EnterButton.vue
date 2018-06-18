<template lang="pug">
  a.button.is-info(href="/single" @click="click" :class="buttonClass")
    img.animated(src="~assets/images/single3.png" :class="imageClass")
</template>

<script>
export default {
  data() {
    return {
      buttonClass: "",
      imageClass: " pulse infinite"
    };
  },
  methods: {
    click(e) {
      e.preventDefault();
      this.buttonClass = "animated rubberBand";
      this.imageClass = "is-success";

      window.setTimeout(() => {
        window.location.href = "/single";
      }, 800);
    }
  }
};
</script>

<style lang="scss" scoped>
:scope {
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
