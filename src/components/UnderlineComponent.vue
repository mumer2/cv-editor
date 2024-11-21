<template>
      <div class="heading-container border-b py-2">
        <div class="action-buttons mt-2 flex space-x-2">
    <div class="underline-component justify-center">
      <!-- The text with underline styling -->
      <span
        :style="{ textDecoration: `underline ${styleType}` }"
        contenteditable="true"
        @input="updateText"
      >
        {{ text }}
      </span>
      <button @click="$emit('delete')"><Icon icon="basil:cross-outline" style="font-size: 20px;" /></button>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue';
  export default {
    components:{
        Icon
    },
    props: {
      text: {
        type: String,
        required: true,
      },
      styleType: {
        type: String,
        default: "solid", // Default to "solid" underline
      },
    },
    methods: {
      updateText(event) {
        const updatedText = event.target.textContent;
        this.$emit("update-content", { text: updatedText });
      },
    },
  };
  </script>
  
  <style scoped>
  .underline-component {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  </style>
  