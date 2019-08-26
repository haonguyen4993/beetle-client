<template>
  <div class="p-4">
    <font-awesome-icon
      :class="{ 'opacity-0': thing.chosen }"
      :icon="['fas', thing.thumbnail]" :size="iconSize" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Thing',
  components: {
    FontAwesomeIcon
  },
  props: {
    thing: {
      type: Object,
      required: true
    },
    index: Number,
    currentThing: Number,
  },
  data () {
    return {
      currentChoose: false
    }
  },
  computed: {
    iconSize: function() {
      return this.index === this.currentThing ? '2x' : 'lg'
    }
  }
}
</script>

<style>

</style>
