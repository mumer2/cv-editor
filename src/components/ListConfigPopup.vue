<template>
    <div v-if="show" class="fixed inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div class="bg-white p-4 rounded-lg shadow-lg w-[300px]">
      <h3>Create a List</h3>
      <label>
        List Type:
        <select v-model="listType">
          <option value="ul">Unordered List</option>
          <option value="ol">Ordered List</option>
        </select>
      </label>
  
      <label>
        Items (comma-separated):
        <input v-model="items" placeholder="Enter items" />
      </label>
  
      <button @click="createList">Create</button>
      <button @click="$emit('close')">Cancel</button>
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
        listType: "ul", // Default to unordered list
        items: "", // Input for list items
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
  