<template>
    <div v-if="show" class="fixed inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div class="bg-white p-4 rounded-lg shadow-lg w-[300px]">
      <h3 class="text-xl text-center font-bold mb-4">Create a List</h3>
      <label>
        <span class="font-semibold mt-3">List Type:</span>
        <select v-model="listType" class="w-full mt-2 border rounded p-2">
          <option value="ul">Unordered List</option>
          <option value="ol">Ordered List</option>
        </select>
      </label>
  
      <label>
        <span class="font-semibold mt-3">Items (comma-separated):</span>
        <input v-model="items" placeholder="Enter items" class="w-full mt-2 border rounded p-2" />
      </label>
  
      <div class="flex justify-between mt-3">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
        <button @click="createList" class="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
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
        listType: "ul", 
        items: "", 
      };
    },
    methods: {
      createList() {
        if (!this.items.trim()) return; // Ensure items are not empty
        const itemArray = this.items.split(",").map((item) => item.trim());
        const newList = { type: this.listType, items: itemArray };
        this.$emit("create-list", newList); // Emit the new list data
      },
    },
  };
  </script>
  