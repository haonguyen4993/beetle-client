<template>
  <layout-default>
    <the-slider />
    <the-collections />
    <section>
      <div class="text-center text-gray-700 w-5/6 md:w-1/2 mx-auto py-12">
        <h3 class="text-xl md:text-3xl tracking-wider mb-3">Shop Featured Products</h3>
        <p class="text-sm mb-3">Quasi voluptatum soluta asperiores ipsum rerum!
          Lorem ipsum dolor sit amet consectetur adipis
        </p>
      </div>
    </section>
    <the-categories-bar />
    <products-list />
  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/LayoutDefault'
import TheSlider from '@/components/TheSlider'
import TheCollections from '@/components/TheCollections'
import TheCategoriesBar from '@/components/TheCategoriesBar'
import ProductsList from '@/components/ProductsList'


export default {
  name: 'HomePage',
  components: {
    LayoutDefault,
    TheSlider,
    TheCollections,
    TheCategoriesBar,
    ProductsList
  }
}
</script>
