<template>
  <Navbar/>
  <div class="pt-14">
    <Home/>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue';
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue';
export default {
  components: {
    Icon,
    Navbar,
    Home,
  },
}
</script>

<style scoped>
body {
  padding-top: 4rem; 
}
</style>
