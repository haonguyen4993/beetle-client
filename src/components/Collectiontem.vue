<template>
  <div class="w-full md:w-1/2" >
    <div class="relative m-3">
      <img :src="require(`@/assets/images/categories/${collection.image}`)">
      <div class="absolute inset-0 flex items-center justify-center">
        <router-link class="p-4 bg-white rounded-lg text-gray-700 hover:bg-gray-700 hover:text-white" to="/">{{ collection.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionItem',
  props: {
    collection: Object
  },
}
</script>

<style>

</style>

