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
          enter-button
          p.caution 🐱🐱🐱 音がでるよ 🐱🐱🐱

    app-footer
    
    nuxt-link.button(to="/single") しんぐるちほー
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import AppFooter from "~/components/AppFooter.vue";
import EnterButton from "~/components/EnterButton.vue";

export default {
  components: {
    AppLogo,
    AppFooter,
    EnterButton
  }
};
</script>

<style>
.title {
  z-index: 999;
}
</style>
