<template>
  <div class="flex flex-wrap mx-4 my-6">
    <collection-item v-for="collection in collections" :key="collection.id" :collection="collection" />
  </div>
</template>

<script>
import axios from 'axios'
import CollectionItem from './Collectiontem'

export default {
  name: 'TheCollections',
  components: {
    CollectionItem
  },
  data () {
    return {
      collections: null,
    }
  },
  mounted () {
    axios
      .get('http://localhost:3001/collections')
      .then(response => (this.collections = response.data))
  }
}
</script>

<style>

</style>

