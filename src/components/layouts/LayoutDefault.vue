<template>
  <div>
    <the-header />
    <main>
      <router-view />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'LayoutDefault',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

