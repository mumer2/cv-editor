<!-- HeadingComponent.vue -->
<template>
    <div class="heading-container border-b py-2">
        <div class="action-buttons mt-2 flex space-x-2">
          <component
        :is="`h${paragraphLevel}`"
        class="editable-heading"
        :class="ParagraphStyle"
        contenteditable="true"
        @input="updateParagraphContent"
      >
        {{ ParagraphContent }}
      </component>
        <button @click="deleteParagraph" class=" text-md font-bold px-2 py-1 rounded">
            <Icon icon="system-uicons:cross" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
import { Icon } from '@iconify/vue';

  export default {
    components:{
        Icon,
    },
    props: {
      ParagraphContent: {
        type: String,
        default: "Sample Heading",
      },
      ParagraphStyle: {
        type: String,
        default: "",
      },
    },
    methods: {
      updateParagraphContent(event) {
        this.$emit("update-content", event.target.textContent);
      },
      deleteParagraph() {
        this.$emit("delete");
      },
    },
  };
  </script>
  
  <style scoped>
  .editable-heading {
    outline: none;
    cursor: text;
  }
  </style>
  