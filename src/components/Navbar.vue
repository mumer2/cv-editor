<template>
    <div class=" text-black bg-white border-b fixed top-0 left-0 w-full z-50">
        <div class="container mx-auto px-10 flex justify-between items-center h-14">
            <div class="text-xl font-bold ml-10">
                <router-link to="/">Builder</router-link>
            </div>

            <nav class="hidden md:flex space-x-6 text-sm">
                <RouterLink to="/" class="hover:text-blue-500">Home</RouterLink>
                <RouterLink to="/about" class="hover:text-blue-500">About</RouterLink>
                <RouterLink to="/templates" class="hover:text-blue-500">Templates</RouterLink>
            </nav>

            <button @click="toggleMenu" class="block md:hidden text-gray-800 focus:outline-none">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
        <transition name="slide-in-from-right">
            <div
                v-if="isOpen"
                class="fixed top-10 text-center right-0 w-2/3 md:w-1/4 h-full bg-gray-100 shadow-lg z-50 flex flex-col py-4 px-6"
            >
                <nav class="space-y-4">
                    <RouterLink to="/" class="block hover:text-blue-500">Home</RouterLink>
                    <RouterLink to="/about" class="block hover:text-blue-500">About</RouterLink>
                    <RouterLink to="/templates" class="block hover:text-blue-500">Templates</RouterLink>
                </nav>
            </div>
        </transition>
    </div>
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
<style scoped>
/* Transition for the sidebar menu */
.slide-in-from-right-enter-active,
.slide-in-from-right-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-in-from-right-enter {
    transform: translateX(100%); /* Start off-screen on the right */
}

.slide-in-from-right-enter-to {
    transform: translateX(0); /* Move into view */
}

.slide-in-from-right-leave {
    transform: translateX(0); /* Start in view */
}

.slide-in-from-right-leave-to {
    transform: translateX(100%); /* Slide out to the right */
}
</style>



