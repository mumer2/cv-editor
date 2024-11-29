<template>
  <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40 items-center">
    <div class="popup bg-blue-50 p-4 border border-gray-200 h-screen w-[350px]">
      <button @click="closePopup" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
        ← Back
      </button>
      <h2 class="text-lg font-semibold mb-4">Create Heading</h2>

      <!-- Heading Level -->
      <div class="mb-4">
        <label for="level" class="block text-sm font-medium text-gray-700">Heading Level</label>
        <div class="flex items-center">
          <button 
            @click="decreaseLevel" 
            :disabled="selectedLevel === 1" 
            class="px-2 py-1 bg-gray-200 rounded-md mr-2"
          >-</button>
          <span class="px-2">H{{ selectedLevel }}</span>
          <button 
            @click="increaseLevel" 
            :disabled="selectedLevel === 6" 
            class="px-2 py-1 bg-gray-200 rounded-md ml-2"
          >+</button>
        </div>
      </div>

      <!-- Font Size -->
      <div class="mb-4">
        <label for="fontSize" class="block text-sm font-medium text-gray-700">Font Size</label>
        <div class="flex items-center">
          <button 
            @click="decreaseFontSize" 
            :disabled="selectedFontSize <= minFontSize" 
            class="px-2 py-1 bg-gray-200 rounded-md mr-2"
          >-</button>
          <span class="px-2">{{ selectedFontSize }}px</span>
          <button 
            @click="increaseFontSize" 
            :disabled="selectedFontSize >= maxFontSize" 
            class="px-2 py-1 bg-gray-200 rounded-md ml-2"
          >+</button>
        </div>
      </div>

      <!-- Heading Style -->
      <div class="mb-4">
        <label for="style" class="block text-sm font-medium text-gray-700">Heading Style</label>
        <select
          id="style"
          v-model="selectedStyle"
          class="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Default</option>
          <option value="font-bold">Bold</option>
          <option value="italic">Italic</option>
          <option value="underline">Underline</option>
        </select>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-between">
        <button @click="closePopup" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
        <button @click="createHeading" class="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
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
      selectedLevel: 1,
      selectedFontSize: 16,
      selectedStyle: "",
      minFontSize: 12,
      maxFontSize: 32,
    };
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    createHeading() {
      this.$emit("create", {
        level: this.selectedLevel,
        fontSize: this.selectedFontSize,
        style: this.selectedStyle,
      });
      this.closePopup();
    },
    increaseLevel() {
      if (this.selectedLevel < 6) this.selectedLevel++;
    },
    decreaseLevel() {
      if (this.selectedLevel > 1) this.selectedLevel--;
    },
    increaseFontSize() {
      if (this.selectedFontSize < this.maxFontSize) this.selectedFontSize += 2;
    },
    decreaseFontSize() {
      if (this.selectedFontSize > this.minFontSize) this.selectedFontSize -= 2;
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
