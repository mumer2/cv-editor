<template>
   <div v-if="show" class="fixed w-fit h-screen top-12 flex inset-0 z-40  items-center">
    <div class="popup bg-white p-4 border border-gray-200 h-screen w-[350px]">
        <button @click="$emit('close')" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
            <h3 class="text-xl text-center font-bold mb-4">Create Link</h3>
            <label class="block mb-2">
                <span class="font-semibold">Link Text:</span>
                <input v-model="linkText" placeholder="Enter link text" class="w-full mt-1 border rounded p-2" />
            </label>
            <label class="block mb-4">
                <span class="font-semibold">Link URL:</span>
                <input v-model="linkUrl" placeholder="Enter link URL" class="w-full mt-1 border rounded p-2" />
            </label>
            <div class="flex justify-between">
                <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded text-gray-700">Cancel</button>
                <button @click="addLink" class="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        link: {
            type: Object,
            default: () => ({ text: "", url: "" }),
        },
    },
    data() {
        return {
            linkText: this.link.text || "", 
            linkUrl: this.link.url || "", 
        };
    },
    methods: {
        addLink() {
            if (!this.linkText.trim() || !this.linkUrl.trim()) {
                alert("Please fill in both fields.");
                return;
            }
            this.$emit("save-link", { text: this.linkText, url: this.linkUrl });
            this.$emit("close");
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