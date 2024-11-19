<template>
  <Navbar />
  <div class="pt-14">
    <RouterView />

  </div>
</template>
<script>
import { RouterView } from 'vue-router'
import { Icon } from '@iconify/vue';
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Icon,
    Navbar,
  },
}
</script>
