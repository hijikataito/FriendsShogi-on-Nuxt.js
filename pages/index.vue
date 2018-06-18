<template lang="pug">
  div.root.page
    #header
      .cover
        .shadow-top
        img(src="~assets/images/logo.png").logo
        
        app-logo
        .container
          // シェアリンクをはる
        .shadow-bottom

    #wrapper
      .container
      .enter-button-area
        .single.is-info(href="/single" image="~assets/images/single3.png" text="🐱 音がでるよ 🐱")
          a.single.is-info.button(href="/single")
            img.animated.pulse.infinite(src="~assets/images/single3.png")
        p.caution 🐱🐱🐱 音がでるよ 🐱🐱🐱

    app-footer
    
    nuxt-link.button(to="/single") しんぐるちほー
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppLogo,
    AppFooter
  }
};
</script>

<style>
.title {
  z-index: 999;
}
</style>
