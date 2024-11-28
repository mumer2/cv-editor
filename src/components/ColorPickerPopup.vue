<template>
   <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="popup bg-white p-4 border border-gray-200 h-screen w-[350px]">
      <button @click="$emit('close')" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
        <h3 class="text-lg font-bold mb-4">Select Colors</h3>
  
        <label class="block mb-4">
          <span class="font-semibold">Background Color:</span>
          <input
            type="color"
            v-model="bgColor"
            class="w-full h-10 mt-2 border rounded p-2 cursor-pointer"
          />
        </label>
  
        <label class="block mb-4">
          <span class="font-semibold">Text Color:</span>
          <input
            type="color"
            v-model="textColor"
            class="w-full h-10 mt-2 border rounded p-2 cursor-pointer"
          />
        </label>
  
        <div class="flex justify-between">
          <button
            @click="$emit('close')"
            class="px-4 py-2 bg-gray-300 rounded text-gray-700"
          >
            Cancel
          </button>
          <button
            @click="applyColors"
            class="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Apply
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
        bgColor: "#ffffff", 
        textColor: "#000000",
      };
    },
    methods: {
      applyColors() {
        this.$emit("apply-colors", { bgColor: this.bgColor, textColor: this.textColor });
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