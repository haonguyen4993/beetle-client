<template>
  <div class="w-full">
    <ul class="flex flex-col md:flex-row md:justify-center items-center border-b border-t border-solid border-gray-400 py-5 mx-4">
      <li class="item">
        <router-link to="/">all</router-link>
      </li>
      <li class="item">
        <router-link to="/">Back Bags</router-link>
      </li>
      <li class="item">
        <router-link to="/">Wallet</router-link>
      </li>
      <li class="item">
        <router-link to="/">Side Bags</router-link>
      </li>
      <li class="item">
        <router-link to="/">Tote Bags</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheCategoriesBar'
}
</script>

<style>
.item {
  @apply px-4 py-2 uppercase text-gray-700 tracking-wide text-sm;
}
.item:hover {
  @apply bg-gray-200;
}
</style>

