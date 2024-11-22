<!-- HeadingComponent.vue -->
<template>
    <div class="heading-container border-b py-2">
        <div class="action-buttons text-xl mt-2 flex space-x-2">
          <component
        :is="`h${headingLevel}`"
        class="editable-heading"
        :class="headingStyle"
        contenteditable="true"
        @input="updateHeadingContent"
      >
        {{ headingContent }}
      </component>
        <button @click="deleteHeading" class=" text-md font-bold px-2 py-1 rounded">
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
      headingLevel: {
        type: Number,
        default: 1,
      },
      headingContent: {
        type: String,
        default: "Sample Heading",
      },
      headingStyle: {
        type: String,
        default: "",
      },
    },
    methods: {
      updateHeadingContent(event) {
        this.$emit("update-content", event.target.textContent);
      },
      deleteHeading() {
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
  