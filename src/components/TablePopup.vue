<!-- TableComponent.vue -->
<template>
    <div v-if="showTable" class="table-container p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Table:</h3>
      <div class="action-buttons mt-2 flex space-x-2">
        <button @click="deleteTable" class=" text-red-800 text-xl font-bold px-2 py-1 rounded">
            <Icon icon="system-uicons:cross" />
        </button>
      </div>
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-gray-200">
            <th v-for="col in columns" :key="col" class="px-4 py-2 border">Header {{ col }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td v-for="colIndex in columns" :key="colIndex" class="px-4 py-2 border">
              <input v-model="rows[rowIndex][colIndex]" class="w-full border-none focus:outline-none" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import { Icon } from '@iconify/vue';

  export default {
    components:{
        Icon,
    },
    props: {
      rows: Array,
      columns: Number,
      showTable: Boolean,
    },
    data() {
      return {};
    },
    methods:{
        deleteTable() {
        this.$emit("delete");
      },
    }
  };
  </script>
  
  <style scoped>
  .table-container {
    max-width: 100%;
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
  }
  </style>
  