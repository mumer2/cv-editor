<template>
  <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="popup bg-blue-50 p-4 border border-gray-200 h-screen w-[350px]">
      <button @click="closePopup" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
        ← Back
      </button>
      <h2 class="text-lg font-semibold mb-4">Configure Paragraph</h2>
      <div class="mb-4">
        <label for="style" class="block text-sm font-medium text-gray-700">Text Style</label>
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

      <div class="flex justify-between">
        <button @click="closePopup" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
        <button @click="createParagraph" class="px-4 py-2 bg-blue-500 text-white rounded">Create Paragraph</button>
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
      selectedStyle: "",
    };
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    createParagraph() {
      this.$emit("create", {
        style: this.selectedStyle,
      });
      this.closePopup();
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