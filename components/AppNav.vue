<template lang="pug">
  #header.nav
    .container
      .nav-left
        nuxt-link.logo(to='/') 
          img(src='~assets/images/logo-mini.png')

      .nav-toggle
        span
        span
        span

      #nav-menu.nav-right.nav-menu
        //= render 'shared/setting_link'
</template>

<script>
export default {};
</script>

<style>
</style>
