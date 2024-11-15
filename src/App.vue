<template>
  <div class="flex h-screen">
    <div>
      <button @click="toggleSidebar" class="fixed top-4 left-4 z-30 p-2 rounded-lg focus:outline-none">
        <span v-if="isSidebarOpen">
          <i class="pi pi-times" style="font-size: 1.2rem; color:black"></i>
        </span>
        <span v-else>
          <i class="pi pi-align-justify" style="font-size: 1.5rem; color:black"></i>
        </span>
      </button>
    </div>

    <div>
      <transition name="slide">
        <div v-if="isSidebarOpen"
          class="fixed inset-y-0 left-[26px] w-[350px] text-white shadow-lg z-20 flex flex-col p-4 overflow-y-auto space-y-4">
          <h2 class="text-xl font-bold text-center text-black">Tools</h2>

          <div class="relative my-6">
            <input id="id-s01" type="search" name="id-s01" placeholder="Search here" aria-label="Search content"
              class="peer relative h-10 w-full border-b border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
          </div>

          <div v-for="(tool, index) in tools" :key="index" class="space-y-2">
            <button @click="toggleTool(tool)" class="flex justify-between w-full py-2 px-4 text-black rounded ">
              <span class="text-gray-600">{{ tool.name }}</span>
              <i :class="tool.isOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-right'" class="text-black"></i>
            </button>

            <transition name="fade">
              <div v-if="tool.isOpen" class="grid grid-cols-3 gap-3">
                <div v-for="(subTool, subIndex) in tool.subTools" :key="subIndex"
                  class="flex flex-col gap-2 cursor-pointer text-xs items-center p-2 border text-black rounded hover:bg-gray-100"
                  @click="openEditor(subTool)">
                  <Icon :icon="subTool.icon" class="text-2xl" />
                  <span>{{ subTool.name }}</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </div>

    <div :class="{
      'flex-1': true,
      'ml-20': !isSidebarOpen,
      'ml-[380px]': isSidebarOpen,
    }" class="preview-section p-4">
      <h2 class="text-xl font-bold text-center text-black">Preview</h2>

      <div v-for="(tool, index) in activeTools" :key="index" class="tool-preview-section">
        <div class="flex justify-between items-center mb-4">
          <!-- <span>{{ tool.name }}</span> -->
          <button @click="removeTool(tool)" class="text-red-500 hover:text-red-700">
            <i class="pi pi-times" style="font-size: 1rem;"></i>
          </button>
        </div>
        <div v-if="tool.name === 'Paragraph'">
          <p>{{ tool.content }}</p>
        </div>
        <div v-if="tool.name === 'Heading'">
          <h1 class="font-bold text-xl">{{ tool.content }}</h1>
        </div>

        <div v-if="tool.name === 'Underline'">
          <u>{{ tool.content }}</u>
        </div>

        <div v-if="tool.name === 'List'">
          <ul class="list-disc pl-5">
            <li v-for="(item, index) in tool.listItems" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <div v-if="activeEditorTool.imageSrc" class="mt-4">
          <img :src="activeEditorTool.imageSrc" alt="Uploaded Preview" class="max-w-full h-auto rounded-lg">{{
            tool.content }}</img>
        </div>
      </div>

    </div>

    <div v-if="activeEditorTool" class="editor-section border-2 border-gray-200 p-4 w-[400px]">
      <h2 class="text-xl font-bold text-center text-black">Editor</h2>
      <div class="editor-content">
        <span>Editing: {{ activeEditorTool.name }}</span>
        <div v-if="activeEditorTool.name === 'Paragraph'">
          <textarea v-model="activeEditorTool.content" class="w-full p-2 border rounded-lg"></textarea>
        </div>
        <div v-if="activeEditorTool.name === 'Heading'">
          <input v-model="activeEditorTool.content" class="w-full p-2 border rounded-lg font-bold text-xl" />
        </div>

        <div v-if="activeEditorTool.name === 'Underline'">
          <input v-model="activeEditorTool.content" class="w-full p-2 border rounded-lg underline" />
        </div>

        <div v-if="activeEditorTool.name === 'List'">
          <div class="flex gap-2 mb-2">
            <input v-model="newListItem" placeholder="Enter list item..." class="w-full p-2 border rounded-lg" />
            <button @click="addListItem" class="bg-blue-500 text-white p-2 rounded-lg">
              Add Item
            </button>
          </div>

          <ul class="list-disc pl-5">
            <li v-for="(item, index) in activeEditorTool.listItems" :key="index">
              {{ item }}
              <button @click="removeListItem(index)" class="text-red-500 ml-2">x</button>
            </li>
          </ul>
        </div>



        <div v-if="activeEditorTool.name === 'Image'">
          <input type="file" @change="handleImageUpload" class="w-full p-2 border rounded-lg" />
        </div>



      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      isSidebarOpen: true,
      activeTools: [],
      activeEditorTool: null,
      selectedTool: null,
      newListItem: "",
      tools: [
        {
          name: "Text",
          isOpen: true,
          subTools: [
            { name: "Paragraph", icon: "mdi:format-paragraph" },
            { name: "Heading", icon: "mdi:bookmark-outline" },
            { name: "Underline", icon: "mdi:format-underline" },
            { name: "List", icon: "mdi:format-list-bulleted" },
            { name: "Quote", icon: "mdi:format-quote-close" },
            { name: "Code", icon: "mdi:code-tags" },
            { name: "Details", icon: "mdi:view-list-outline" },
            { name: "Preformatted", icon: "mdi:code-braces" },
            { name: "Pullquote", icon: "mdi:format-quote-open" },
            { name: "Table", icon: "mdi:grid-large" },
            { name: "Verse", icon: "mdi:leaf" },
            { name: "Classic", icon: "mdi:keyboard-outline" },
          ],
        },
        {
          name: "Media",
          isOpen: true,
          subTools: [
            { name: "Image", icon: "mdi:image" },
            { name: "Cover", icon: "dashicons:cover-image" },
            { name: "File", icon: "mdi:file" },

          ],
        },

        {
          name: "Design",
          isOpen: true,
          subTools: [
            { name: "Buttons", icon: "mdi:button" },
            { name: "Column", icon: "mingcute:column-line" },
            { name: "Row", icon: "carbon:row" },
            { name: "Grid", icon: "mdi-light:grid" },
            { name: "Page Break", icon: "icomoon-free:pagebreak" },
            { name: "Separator", icon: "ri:separator" },

          ],
        },
      ],

    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleTool(tool) {
      tool.isOpen = !tool.isOpen;
    },
    // openEditor(subTool) {
    //   if (!this.activeTools.some(tool => tool.name === subTool.name)) {
    //     this.activeTools.push(subTool);
    //   }
    //   this.activeEditorTool = subTool;
    // },
    openEditor(tool) {
      if (!this.activeTools.includes(tool)) {
        this.activeTools.push(tool);
      }
      this.selectedTool = tool;
      this.activeEditorTool = tool;
    },
    // removeTool(tool) {
    //   this.activeTools = this.activeTools.filter(activeTool => activeTool.name !== tool.name);
    //   if (this.activeEditorTool && this.activeEditorTool.name === tool.name) {
    //     this.activeEditorTool = null;
    //   }
    // },


    removeTool(tool) {
      this.activeTools = this.activeTools.filter(
        (activeTool) => activeTool.name !== tool.name
      );
      if (this.selectedTool && this.selectedTool.name === tool.name) {
        this.selectedTool = null;
        this.activeEditorTool = null;
      }
    },

    addListItem() {
      if (this.newListItem.trim()) {
        this.activeEditorTool.listItems.push(this.newListItem.trim());
        this.newListItem = "";
      }
    },
    removeListItem(index) {
      this.activeEditorTool.listItems.splice(index, 1);
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.activeEditorTool.imageSrc = e.target.result; 
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tool-preview-section,
.editor-section {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
}
</style>
