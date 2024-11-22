<!-- HeadingConfigPopup.vue -->
<template>
    <div v-if="show" class="fixed inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div class="bg-white p-4 rounded-lg shadow-lg w-[300px]">
        <h2 class="text-lg font-semibold mb-4">Configure Paragraph</h2>
        <!-- <div class="mb-4">
          <label for="level" class="block text-sm font-medium text-gray-700">Paragraph</label>
          <select
            id="level"
            v-model="selectedLevel"
            class="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          >
            <option v-for="level in levels" :key="level" :value="level">H{{ level }}</option>
          </select>
        </div> -->
        <div class="mb-4">
          <label for="style" class="block text-sm font-medium text-gray-700">Text Style</label>
          <select
            id="style"
            v-model="selectedStyle"
            class="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Default</option>
            <!-- <option value="font-bold">Bold</option>
            <option value="italic">Italic</option>
            <option value="underline">Underline</option> -->
          </select>
        </div>
        <div class="flex justify-between">
          <button @click="closePopup" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
          <button @click="createParagraph" class="px-4 py-2 bg-blue-500 text-white rounded">Create Paragraph</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
    },
    data() {
      return {
        selectedStyle: "",
      };
    },
    methods: {
      closePopup() {
        this.$emit("close");
      },
      createParagraph() {
        this.$emit("create", {
          style: this.selectedStyle,
        });
        this.closePopup();
      },
    },
  };
  </script>
  