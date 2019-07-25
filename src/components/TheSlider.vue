<template>
  <div class="slider">
    <slider-item :backgroundImg="backgroundImg" />
  </div>
</template>

<script>
import SliderItem from './SliderItem'

export default {
  name: 'TheSlider',
  components: {
    SliderItem
  },
  data () {
    return {
      backgroundImg: 'sample-banner1.jpg'
    }
  }
}
</script>

<style>

</style>

