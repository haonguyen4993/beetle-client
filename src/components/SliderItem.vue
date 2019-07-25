<template>
  <div class="relative">
    <img :src="require(`@/assets/images/${backgroundImg}`)">
    <div class="absolute inset-0 flex items-center text-gray-700">
      <div class="m-6 md:m-12 bg-gray-100 py-3 px-4 rounded">
        <h3 class="text-2xl mb-3 tracking-wide md:text-3xl">Frilled Sleeve Top</h3>
        <p class="text-sm mb-4">Stock in physical stores</p>
        <div class="flex">
          <router-link class="p-3 md:p-4 tracking-wider rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-500 hover:text-gray-800" to="/">Shop now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    backgroundImg: String
  }
}
</script>

<style>

</style>

