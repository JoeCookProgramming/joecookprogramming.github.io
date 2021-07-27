<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'
  export default {
    name: 'app',
    components: {
      Header
    },
    created () {
      this.$store.dispatch('retrieveCookies')
    }
  }
</script>

<style>

</style>
