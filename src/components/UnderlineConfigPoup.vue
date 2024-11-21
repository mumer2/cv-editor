<template>
  <div class="fixed inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div class="popup bg-white p-6 rounded-lg shadow-lg">
      <h3 class="text-xl text-center font-bold mb-4">Create Underline</h3>
      <label class="block mb-4">
        <span class="font-semibold">Text:</span>
        <input
          v-model="text"
          placeholder="Enter text to underline"
          class="w-full mt-2 border rounded px-2 py-1"
        />
      </label>

      <label class="block mb-4">
        <span class="font-semibold">Underline Style:</span>
        <select v-model="style" class="w-full mt-2 border rounded px-2 py-1">
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="wavy">Wavy</option>
        </select>
      </label>

      <div class="flex justify-between">
        <button
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-300 rounded text-gray-700"
        >
          Cancel
        </button>
        <button
          @click="createUnderline"
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
  max-width: 400px;
  width: 100%;
}
</style>
