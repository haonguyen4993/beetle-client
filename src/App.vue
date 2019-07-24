<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Helvetica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
