<template>
  <div>
    <app-nav v-if="!isRootPage" />

    <nuxt/>

    <app-footer/>
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  computed: {
    isRootPage() {
      return this.$route.path === "/";
    }
  },
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style>
</style>
