<template>
   <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="bg-white p-4 border border-gray-200 h-screen w-[350px]">
      <button @click="closePopup" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
        <h3 class="text-lg font-bold mb-4 text-center">Add Text</h3>
  
        <!-- Input for Text -->
        <label class="block mb-4">
          <span class="font-semibold">Text:</span>
          <input
            v-model="text"
            type="text"
            placeholder="Enter text"
            class="w-full mt-2 border rounded p-2"
          />
        </label>
  
        <label class="block mb-4">
          <span class="font-semibold">Alignment:</span>
          <select
            v-model="alignment"
            class="w-full mt-2 border rounded p-2"
          >
            <option value="text-left">Left</option>
            <option value="text-center">Center</option>
            <option value="text-right">Right</option>
          </select>
        </label>
  
        <div class="flex justify-between mt-4">
          <button
            @click="closePopup"
            class="px-4 py-2 bg-gray-300 rounded text-gray-700"
          >
            Cancel
          </button>
          <button
            @click="confirmPopup"
            class="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Create
          </button>
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
        text: "",
        alignment: "text-left", 
      };
    },
    methods: {
      closePopup() {
        this.$emit("close"); 
        this.resetFields(); 
      },
      confirmPopup() {
        if (this.text.trim()) {
          this.$emit("add-text", { content: this.text, alignment: this.alignment });
          this.closePopup(); 
        }
      },
      resetFields() {
        this.text = "";
        this.alignment = "text-left";
      },
    },
  };
  </script>
  