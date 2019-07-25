<template>
  <div id="app">
    <the-header />
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'

import TheHeader from './components/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
