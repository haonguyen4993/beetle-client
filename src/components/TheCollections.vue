<template>
  <div class="flex flex-wrap mx-4 my-6">
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <collection-item v-for="collection in collections" :key="collection.id" :collection="collection" />
  </div>
</template>

<script>
import CollectionItem from './Collectiontem'

export default {
  name: 'TheCollections',
  components: {
    CollectionItem
  },
  data () {
    return {
      collections: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    this.$http
      .get('http://localhost:3001/collections')
      .then(response => (this.collections = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style>

</style>

