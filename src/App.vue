<template>
  <div id="app">
    <the-header />
    <the-slider />
    <the-collections />
    <section>
      <div class="text-center text-gray-700 w-5/6 md:w-1/2 mx-auto py-12">
        <h3 class="text-xl md:text-3xl tracking-wider mb-3">Shop Featured Products</h3>
        <p class="text-sm mb-3">Quasi voluptatum soluta asperiores ipsum rerum!
          Lorem ipsum dolor sit amet consectetur adipis
        </p>
      </div>
    </section>
    <the-categories-bar />
    <products-list />
    <router-view/>
    <the-footer />
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'

import TheHeader from './components/TheHeader'
import TheSlider from './components/TheSlider'
import TheCollections from './components/TheCollections'
import TheCategoriesBar from './components/TheCategoriesBar'
import TheFooter from './components/TheFooter'
import ProductsList from './components/ProductsList'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSlider,
    TheCollections,
    TheCategoriesBar,
    TheFooter,
    ProductsList
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
