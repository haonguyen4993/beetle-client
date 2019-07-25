<template>
  <div class="w-full md:w-1/3 sm:w-1/2">
    <div class="relative m-4">
      <img class="rounded" :src="require(`@/assets/images/products/${product.image}`)">
      <div class="a absolute inset-0 flex justify-between">
        <div class="flex-grow px-2 py-3">
          <ul>
            <li>
              <span class="rounded inline-block bg-orange-500 text-gray-200 text-sm text-center mb-2 px-2 py-1">Hot</span>
            </li>
            <li>
              <span class="rounded inline-block bg-green-400 text-gray-200 text-sm text-center mb-2 px-2 py-1">-25%</span>
            </li>
          </ul>
        </div>
        <div class="flex-grow text-center px-2 py-3 mt-auto">
          <button class="rounded-lg bg-white text-gray-700 shadow py-2 px-4 uppercase">Add to cart</button>
        </div>
        <div class="flex-grow text-right px-2 py-3">
          <ul>
            <li>
              <router-link class="p-1 mb-2 text-gray-700 text-xs inline-block border border-solid border-gray-600 rounded-full" to="/">
                <font-awesome-icon :icon="heartIcon" />
              </router-link>
            </li>
            <li>
              <router-link class="p-1 mb-2 text-gray-700 text-xs inline-block border border-solid border-gray-600 rounded-full" to="/">
                <font-awesome-icon :icon="eyeIcon" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center pb-2">
      <h2 class="mb-2">{{ product.name }}</h2>
      <p class="font-bold text-sm">{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEye,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'ProductItem',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      eyeIcon: faEye,
      heartIcon: faHeart
    }
  },
  props: {
    product: Object
  }
}
</script>

<style>
</style>

