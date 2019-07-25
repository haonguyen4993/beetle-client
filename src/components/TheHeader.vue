<template>
  <header class="bg-gray-100">
    <nav class="container mx-auto p-5 flex items-center justify-between">
      <div class="left">
        <router-link class="text-gray-700 text-2xl font-semibold tracking-wider" to="/">Beetle</router-link>
        <input type="checkbox" id="toggle-menu" class="hidden">
      </div>
      <div class="center">
        <ul class="hidden md:flex">
          <li class="menu-item"><router-link class="menu-link" to="/">Home</router-link></li>
          <li class="menu-item"><router-link class="menu-link" to="/">Shop</router-link></li>
          <li class="menu-item"><router-link class="menu-link" to="/">Page</router-link></li>
          <li class="menu-item"><router-link class="menu-link" to="/">Feature</router-link></li>
          <li class="menu-item"><router-link class="menu-link" to="/">Blog</router-link></li>
        </ul>
      </div>
      <div class="right">
        <ul class="flex">
          <li class="menu-item">
            <font-awesome-icon :icon="searchIcon" />
          </li>
          <li class="menu-item">
            <font-awesome-icon :icon="userIcon" />
          </li>
          <li class="menu-item">
            <font-awesome-icon :icon="cartIcon" />
          </li>
          <li class="menu-item inline-flex md:hidden">
            <label for="toggle-menu" class="show-menu-btn">
              <font-awesome-icon :icon="navIcon" />
            </label>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faShoppingCart,
  faAlignJustify,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'TheHeader',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      cartIcon: faShoppingCart,
      navIcon: faAlignJustify,
      userIcon: faUser,
      searchIcon: faSearch
    }
  }
}
</script>

<style>
.menu-item {
  @apply pr-2 pl-2 text-gray-700;
}
.menu-item:hover {
  @apply text-gray-800;
}
.menu-link {
  @apply pb-1;
}
.menu-link:hover {
  @apply border-b-2 border-solid border-gray-700;
}

</style>
