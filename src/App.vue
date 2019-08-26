<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPen,
  faGlasses,
  faWallet,
  faEnvelopeOpen,
  faBook,
  faCamera,
  faLightbulb,
  faBox,
  faKey,
  faClock
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPen,
  faGlasses,
  faWallet,
  faEnvelopeOpen,
  faBook,
  faCamera,
  faLightbulb,
  faBox,
  faKey,
  faClock
)

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Helvetica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
