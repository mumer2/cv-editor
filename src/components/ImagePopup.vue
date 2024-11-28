<template>
   <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="popup bg-white p-4 border border-gray-200 h-screen w-[350px]">
      <button @click="$emit('close')" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
        <h3 class="mb-4 font-bold">Add Image</h3>
  
        <label class="block mb-4">
          Select Image:
          <input type="file" @change="onFileChange" class="w-full border px-2 py-1 rounded" />
        </label>
  
        <div class="flex justify-between">
            <button
            @click="$emit('close')"
            class="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            @click="createImage"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
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
      selectedImage: null, 
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target.result; 
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file.");
      }
    },
    createImage() {
      if (!this.selectedImage) {
        alert("Please select an image.");
        return;
      }
      this.$emit("create-image", this.selectedImage);
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