<!-- TableConfigPopup.vue -->
<template>
    <div v-if="show" class="absolute inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div class="bg-white p-4 rounded-lg shadow-lg w-[300px]">
        <h2 class="text-lg font-semibold mb-4">Configure Table</h2>
        <div class="mb-4">
          <label for="rows" class="block text-sm font-medium text-gray-700">Rows</label>
          <input
            id="rows"
            type="number"
            v-model="rows"
            min="1"
            class="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="columns" class="block text-sm font-medium text-gray-700">Columns</label>
          <input
            id="columns"
            type="number"
            v-model="columns"
            min="1"
            class="mt-1 block w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div class="flex justify-between">
          <button @click="closePopup" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
          <button @click="createTable" class="px-4 py-2 bg-blue-500 text-white rounded">Create Table</button>
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
        rows: 3,
        columns: 3,
      };
    },
    methods: {
      closePopup() {
        this.$emit("close");
      },
      createTable() {
        const tableData = Array.from({ length: this.rows }, () =>
          Array(this.columns).fill("")
        );
        this.$emit("create", tableData, this.columns);
        this.closePopup();
      },
    },
  };
  </script>
  
  <style scoped>
  input[type="number"] {
    width: 100%;
  }
  </style>
  