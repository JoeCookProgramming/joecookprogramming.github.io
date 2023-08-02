<template>
  <Header/>
  <router-view/>
</template>

<script>
import { event } from 'vue-gtag'
import Header from './components/Header.vue'
  export default {
    name: 'app',
    components: {
      Header
    },
    created () {
      this.$store.dispatch('retrieveCookies')
    },
    setup() {
      const login = () => {
        event('login', {method: 'Google'})
      }
      return {
        login
      }
    }

  }
</script>

<style>

</style>
