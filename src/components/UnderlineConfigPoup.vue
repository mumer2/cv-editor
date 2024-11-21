<template>
    <div class="popup">
      <h3 class="text-xl text-center">Create Underline</h3>
      <label>
        <span class="font-semibold mt-3">Text:</span>
        <input v-model="text" placeholder="Enter text to underline" class="w-full mt-2" />
      </label>
  
      <label>
        <span class="font-semibold mt-3">Underline Style:</span>
        <select v-model="style" class="w-full mt-2">
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="wavy">Wavy</option>
        </select>
      </label>
  
      <div class="flex justify-between mt-3">
          <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
          <button @click="createUnderline" class="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: "",
        style: "solid",
      };
    },
    methods: {
      createUnderline() {
        if (!this.text.trim()) {
          alert("Text cannot be empty.");
          return;
        }
        const newUnderline = { text: this.text, style: this.style };
        this.$emit("create-underline", newUnderline);
      },
    },
  };
  </script>
  
  <style scoped>
  .popup {
    padding: 16px;
    border: 1px solid #ccc;
    background-color: #fff;
    max-width: 300px;
  }
  </style>
  