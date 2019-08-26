<template>
  <div
    class="flex items-center justify-center"
    :class="{ 'cabinet-full': cabinet.full }"
    :style="{ width: width + 'px', height: height + 'px' }"
    @click="$emit('putThing', cabinet.index)"
  >
    <font-awesome-icon
      v-if="cabinet.full"
      :icon="['fas', cabinet.contain.thumbnail]" size="2x" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Cabinet',
  components: {
    FontAwesomeIcon
  },
  props: {
    width: String,
    height: String,
    cabinet: Object
  }
}
</script>

<style>
.cabinet-full {
  background-color: #ddd;
  opacity: 0.6;
}
</style>
