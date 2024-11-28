<template>
   <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="popup bg-white p-4 border border-gray-200 h-screen w-[350px]">
      <button @click="$emit('close')" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
      <h3 class="text-xl text-center font-bold mb-4">Create a List</h3>
      <label>
        <span class="font-semibold mt-3">List Type:</span>
        <select v-model="listType" class="w-full mt-2 border rounded p-2">
          <option value="ul">Default</option>
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
        if (!this.items.trim()) return; 
        const itemArray = this.items.split(",").map((item) => item.trim());
        const newList = { type: this.listType, items: itemArray };
        this.$emit("create-list", newList);
      },
    },
  };
  </script>
  <style scoped>
  @media (max-width: 768px) {
    .popup {
      margin-top: 10px;
      position: absolute;
      width: 300px;
      z-index: 20;
    }
  
    .content-area {
      margin-left: 0 !important;
    }
  }
  </style>
  