<template>
    <div class="style-selector p-4 relative">
      <!-- Close Button -->
      <button 
        @click="closeStyleSelector" 
        class="absolute top-0 text-gray-500 hover:text-gray-800"
        aria-label="Close"
      >
        <Icon icon="eva:arrow-back-fill" style="font-size: 20px;" />
      </button>
  
      <h3 class="text-lg font-bold pt-3">
        Select 
        <span v-if="currentStyle === 'heading'">Heading</span>
        <span v-else-if="currentStyle === 'paragraph'">Paragraph</span>
        <span v-else-if="currentStyle === 'list'">List</span>
        <span v-else-if="currentStyle === 'image'">Image</span>
        Style
      </h3>
  
      <div class="grid grid-cols-3 gap-4 mt-4">
        <!-- Style Buttons for Paragraph/Heading -->
        <template v-if="currentStyle === 'heading' || currentStyle === 'paragraph'">
          <button @click="selectStyle('normal')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="uil:text" style="color: black;font-size: 26px;" /></span>
            <span>Normal</span>
          </button>
          <button @click="selectStyle('italic')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="carbon:text-italic" style="color: black;font-size: 26px;" /></span>
            <span>Italic</span>
          </button>
          <button @click="selectStyle('bold')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="gridicons:bold" style="color: black;font-size: 26px;" /></span>
            <span>Bold</span>
          </button>
          <button @click="selectStyle('underline')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="proicons:text-underline" style="color: black;font-size: 26px;" /></span>
            <span>Underline</span>
          </button>
          <button @click="selectStyle('uppercase')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="bi:alphabet-uppercase" style="color: black;font-size: 26px;" /></span>
            <span>Uppercase</span>
          </button>
          <button @click="selectStyle('lowercase')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="proicons:text-case-lowercase" style="color: black;font-size: 26px;" /></span>
            <span>Lowercase</span>
          </button>
          <button @click="selectStyle('strike')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="clarity:strikethrough-line" style="color: black;font-size: 26px;" /></span>
            <span>Strike Through</span>
          </button>
        </template>
  
        <!-- Specific Style Options for List -->
        <template v-if="currentStyle === 'list'">
          <button @click="selectStyle('bullet-list')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="mdi:format-list-bulleted" style="color: black;font-size: 26px;" /></span>
            <span>Bullet List</span>
          </button>
          <button @click="selectStyle('numbered-list')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="mdi:format-list-numbered" style="color: black;font-size: 26px;" /></span>
            <span>Numbered List</span>
          </button>
        </template>
  
        <!-- Specific Style Options for Image -->
        <template v-if="currentStyle === 'image'">
          <button @click="selectStyle('rounded-image')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="mdi:image-filter-vintage" style="color: black;font-size: 26px;" /></span>
            <span>Rounded</span>
          </button>
          <button @click="selectStyle('shadow-image')" class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
            <span><Icon icon="mdi:image-shadow" style="color: black;font-size: 26px;" /></span>
            <span>Shadow</span>
          </button>
        </template>
      </div>
    </div>
  </template>
<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  props: ['currentStyle'], // currentStyle could be 'heading', 'paragraph', 'list', or 'image'
  methods: {
    selectStyle(style) {
      this.$emit('applyStyle', style); // Emit the style selection to the parent
    },
    closeStyleSelector() {
      this.$emit('closeStyleSelector'); // Emit event to close the style selector
    },
  },
};
</script>
  