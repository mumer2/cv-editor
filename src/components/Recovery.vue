<template>
  <div class="flex h-screen">
    <!-- Sidebar for selecting tools -->
    <div>
      <button @click="toggleSidebar" class="absolute top-[63px] left-2 z-30 p-2 rounded-lg focus:outline-none">
        <span v-if="isSidebarOpen">
          <i class="pi pi-times" style="font-size: 1rem; color:black"></i>
        </span>
        <span v-else>
          <i class="pi pi-bars" style="font-size: 1rem; color:black"></i>
        </span>
      </button>
    </div>

    <!-- <div v-if="isSidebarOpen" class="sidebar inset-y-0 left-0 w-[350px] text-white border border-gray-300 shadow-lg z-20 flex flex-col p-4 overflow-y-auto space-y-4">
      <h2 class="text-sm font-bold text-center text-black">Tools</h2>
      <div class="grid grid-cols-3 gap-2">
        <button @click="openTableConfigPopup" class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
          <span>Table</span>
          <span>Table</span>
      </button>
      <button @click="openTableConfigPopup" class="py-2 px-4 text-black rounded hover:bg-slate-200">
        Table
      </button>
      </div>
      
    </div> -->

    <div>
      <transition name="slide">
        <div v-if="isSidebarOpen"
          class="sidebar inset-y-0  left-0 w-[350px] text-white border border-gray-300 shadow-lg z-20 flex flex-col p-4 overflow-y-auto space-y-4">
          <h2 class="text-sm font-bold text-center text-black">Tools</h2>

          <div class="relative my-6">
            <input id="id-s01" type="search" name="id-s01" placeholder="Search here" aria-label="Search content"
              class="peer relative h-10 w-full border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-300 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
          </div>

          <div v-for="(tool, index) in tools" :key="index" class="space-y-2">
            <button @click="toggleTool(tool)"
              class="flex justify-between w-full py-2 px-4 text-black rounded hover:bg-slate-200 ">
              <span class="text-gray-600 text-sm">{{ tool.name }}</span>
              <i :class="tool.isOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"
                style="font-size: 0.7rem; margin-top: 6px;" class="text-black"></i>
            </button>

            <transition name="fade">
              <div v-if="tool.isOpen">
                <div @click="openEditor(subTool)">
                  <div class="grid grid-cols-3 gap-3">
                    <button @click="openParagraphConfigPopup"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span><Icon icon="ci:paragraph" style="color: black;font-size: 26px;" /></span>
                      <span class="text-sm">Paragraph</span>
                    </button>
                    <button @click="openHeadingConfigPopup"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="oui:editor-heading" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Heading</span>
                    </button>
                    <button @click="openTableConfigPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="fluent:table-20-regular" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Table</span>
                    </button>
                  
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </div>

    <div :class="{
      'flex-1': true,
      'ml-0': !isSidebarOpen,
      'ml-0': isSidebarOpen,
    }" class="preview-section border border-gray-300 p-4">
      <h2 class="text-sm font-bold text-center text-black">Preview</h2>


       <!-- Paragraph Component -->
       <div v-for="(paragraph, index) in paragraph" :key="index">
        <ParagraphPopup :paragraphContent="paragraph.content" :paragraphStyle="paragraph.style"
          @update-content="updateParagraphContent(index, $event)" @delete="deleteParagraph(index)" />
      </div>
      
      <!-- Table Component -->
      <TablePopup v-if="tableData.length > 0" :rows="tableData" :columns="columns" :showTable="showTable" @delete="deleteTable(index)" />

      <!-- Heading Component -->

      <div v-for="(heading, index) in headings" :key="index">
        <HeadingPopup :headingLevel="heading.level" :headingContent="heading.content" :headingStyle="heading.style"
          @update-content="updateHeadingContent(index, $event)" @delete="deleteHeading(index)" />
      </div>
    </div>


    <!-- Editor Section -->
    <div v-if="editorToolActive" class="editor-section border-2 border-gray-200 p-4 w-[300px]">
      <h2 class="text-sm font-bold text-center text-black">Editor</h2>
      <!-- <div class="editor-content">
        <span class="text-xs">Editing Table</span>
        <TablePopup v-if="tableData.length > 0" :rows="tableData" :columns="columns" :showTable="showTable" />
      </div> -->
    </div>
    
     <!-- Paragraph Configuration Popup -->
     <ParagraphConfigPopup :show="showParagraphConfigPopup" @close="closeParagraphConfigPopup" @create="createParagraph" />
    
    <!-- Heading Configuration Popup -->
    <HeadingConfigPopup :show="showHeadingConfigPopup" @close="closeHeadingConfigPopup" @create="createHeading" />
    
    <!-- Table Configuration Popup -->
    <TableConfigPopup :show="showTableConfigPopup" @close="closeTableConfigPopup" @create="createTable" />
  
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import TablePopup from './TablePopup.vue';
import TableConfigPopup from './TableConfigPopup.vue';
import HeadingPopup from './HeadingPopup.vue';
import HeadingConfigPopup from './HeadingConfigPopup.vue';
import ParagraphConfigPopup from './ParagraphConfigPopup .vue';
import ParagraphPopup from './ParagraphPopup.vue';

export default {
  name: "Home",
  components: {
    TablePopup,
    TableConfigPopup,
    HeadingPopup,
    HeadingConfigPopup,
    ParagraphConfigPopup,
    ParagraphPopup,
    Icon
  },
  data() {
    return {
      isSidebarOpen: true,
      showTableConfigPopup: false,
      activeTools: [],
      showHeadingConfigPopup: false,
      headings: [],
      showParagraphConfigPopup: false,
      paragraph: [],
      tableData: [],
      activeEditorTool: null,
      selectedTool: null,
      newListItem: "",
      columns: 0,
      showTable: false,
      editorToolActive: false,
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

    // Paragraph

    openParagraphConfigPopup() {
      this.showParagraphConfigPopup = true;
    },

    closeParagraphConfigPopup() {
      this.showParagraphConfigPopup = false;
    },
    createParagraph({ style }) {
      this.paragraph.push({ style, content: "Sample Paragraph" });
    },

    updateParagraphContent(index, content) {
      this.paragraph[index].content = content;
    },
    deleteParagraph(index) {
      this.paragraph.splice(index, 1);
    },

    // Table

    openTableConfigPopup() {
      this.showTableConfigPopup = true;
    },

    closeTableConfigPopup() {
      this.showTableConfigPopup = false;
    },

    createTable(data, columns) {
      this.tableData = data;
      this.columns = columns;
      this.showTable = true;
      this.closeTableConfigPopup();
    },
    deleteTable(index) {
      this.tableData.splice(index, 1);
    },

    toggleEditor() {
      this.editorToolActive = !this.editorToolActive;
    },

    // Heading

    openHeadingConfigPopup() {
      this.showHeadingConfigPopup = true;
    },

    closeHeadingConfigPopup() {
      this.showHeadingConfigPopup = false;
    },

    createHeading({ level, style }) {
      this.headings.push({ level, style, content: "Sample Heading" });
    },

    updateHeadingContent(index, content) {
      this.headings[index].content = content;
    },
    deleteHeading(index) {
      this.headings.splice(index, 1);
    },
    


  },
};
</script>

<style scoped>
/* Add additional styling as necessary */
</style>
