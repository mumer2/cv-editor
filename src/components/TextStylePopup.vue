<template>
   <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="bg-white p-4 border border-gray-200 h-screen w-[350px]">
      <button  @click="$emit('close')" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
        <h3 class="mb-4 font-bold">Create Styled Text</h3>
  
        <label class="block mb-2">
          Text:
          <input
            v-model="text"
            class="w-full border px-2 py-1 rounded"
            placeholder="Enter text"
          />
        </label>
  
        <label class="block mb-2">
          Color:
          <input
            type="color"
            v-model="color"
            class="w-full h-10 border rounded"
          />
        </label>
  
        <label class="block mb-4">
          Text Style:
          <select v-model="style" class="w-full border px-2 py-1 rounded">
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
            <option value="bold">Bold</option>
          </select>
        </label>
  
        <div class="flex justify-between">
            <button
            @click="$emit('close')"
            class="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            @click="createStyledText"
            class="bg-blue-500 text-white px-4 py-2 rounded"
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
      color: "#000000", 
      style: "normal", 
    };
  },
  methods: {
    createStyledText() {
      if (!this.text.trim()) {
        alert("Text cannot be empty.");
        return;
      }

      const styledText = {
        text: this.text,
        color: this.color,
        style: this.style,
      };
      this.$emit("create-styled-text", styledText); 
    },
  },
};
</script>
  