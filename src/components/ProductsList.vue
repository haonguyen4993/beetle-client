<template>
  <div class="flex flex-wrap">
    <product-item v-for="product of products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import axios from 'axios'
import ProductItem from './ProductItem'

export default {
  name: 'ProductsList',
  components: {
    ProductItem
  },
  data () {
    return {
      products: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3001/products')
      .then(response => (this.products = response.data))
  }
}
</script>

<style>

</style>

