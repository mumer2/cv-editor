<template>
     <nav class="bg-gray-200 text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div class="container mx-auto px-10 flex justify-between items-center h-14">
        <div class="text-xl font-bold">
          <router-link to="/" class="hover:text-gray-400">Editor</router-link>
        </div>
        <nav class="hidden md:flex space-x-6 text-sm">
        <RouterLink to="/" class="hover:text-gray-500">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-500">About</RouterLink>
        <RouterLink to="/templates" class="hover:text-gray-500">Templates</RouterLink>

      </nav>

        <!-- <ul class="hidden md:flex space-x-6 text-sm">
          <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
          <li><a href="#" class="hover:text-gray-400">About</a></li>
          <li><a href="#" class="hover:text-gray-400">Tools</a></li>
        </ul> -->
        <button 
          @click="toggleMenu" 
          class="block md:hidden text-gray-800 focus:outline-none">
          <svg 
            class="w-6 h-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="md:visible text-center text-black bg-gray-100 z-50">
        <nav class="space-y-2 py-2 px-4">
        <RouterLink to="/" class="block hover:text-gray-500">Home</RouterLink>
        <RouterLink to="/about" class="block hover:text-gray-500">About</RouterLink>
        <RouterLink to="/templates" class="block hover:text-gray-500">Templates</RouterLink>
      </nav>
        <!-- <ul class="space-y-2 py-2 px-4">
          <li><router-link to="/" class="block hover:text-gray-300">Home</router-link></li>
          <li><a href="#" class="block hover:text-gray-300">About</a></li>
          <li><a href="#" class="block hover:text-gray-300">Tools</a></li>
        </ul> -->
      </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  