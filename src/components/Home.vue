<template>
  <div class="flex h-screen">

    <div>
      <button @click="toggleSidebar" class="fixed top-[12px]  left-3 z-50 p-2 rounded-lg focus:outline-none">
        <span v-if="isSidebarOpen">
          <i class="pi pi-bars" style="font-size: 1.3rem; color:black"></i>
        </span>
        <span v-else>
          <i class="pi pi-bars" style="font-size: 1.3rem; color:black"></i>
        </span>
      </button>
    </div>

    <div>
      <transition name="slide">
        <div v-if="isSidebarOpen"
          class="sidebar bg-blue-50 inset-y-0 left-0 w-[200px] lg:w-[350px] text-white border border-gray-300 z-50 flex flex-col p-4 overflow-y-auto space-y-4">
          <h2 class="text-sm font-bold text-center text-black">Tools</h2>

          <div class="relative my-6">
            <input id="id-s01" type="search" name="id-s01" placeholder="Search here" aria-label="Search content"
              class="peer relative rounded-full h-10 w-full border border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-300 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
          </div>

          <div class="relative w-full h-screen flex bg-blue-50">
            <!-- Main Tools Menu -->
            <div v-if="currentMenu === 'main'" class="p-2 rounded-lg w-full">
              <div class="grid grid-cols-3 gap-3">
              <button v-for="tool in tools" :key="tool.id" @click="openSubMenu('textSubMenu',tool.id)"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="ion:text" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">{{ tool.name }}</span>
                    </button>

                      <button v-for="tool2 in tools2" :key="tool2.id" @click="openSubMenu2('mediaSubMenu',tool2.id)"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="material-symbols-light:perm-media" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">{{ tool2.name }}</span>
                    </button>

                    <button v-for="tool3 in tools3" :key="tool3.id" @click="openSubMenu3('insertSubMenu',tool3.id)"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="vaadin:insert" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">{{ tool3.name }}</span>
                    </button>
                  </div>
              
            </div>

            <!-- Submenu Popup -->
            <div v-else-if="currentMenu === 'textSubMenu'" class="p-0 bg-blue-50 rounded-lg w-80">
              <button @click="backToMainMenu" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>

                  <div class="grid grid-cols-3 gap-3">

                    <button @click="openParagraphConfigPopup"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="ci:paragraph" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Paragraph</span>
                    </button>

                    <button @click="openHeadingConfigPopup"
                      class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="oui:editor-heading" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Heading</span>
                    </button>

                    <button @click="openListConfigPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="cuida:list-outline" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">List</span>
                    </button>

                    <button @click="openUnderlineConfigPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="tabler:underline" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Underline</span>
                    </button>

                    <button @click="showPositionPopup = true"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="fluent:text-position-behind-20-regular" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Position</span>
                    </button>

                    <button @click="openPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="ic:twotone-color-lens" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Color style</span>
                    </button>

                    <button @click="openLinkPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="bitcoin-icons:link-filled" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Link</span>
                    </button>

                    <button @click="showColorPopup = true"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="ant-design:bg-colors-outlined" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">BG Color</span>
                    </button>

                  </div>

               
            </div>

            <!-- Media -->
            <div v-else-if="currentMenu === 'mediaSubMenu'" class="p-2 bg-blue-50 rounded-lg w-80">
              <button @click="backToMainMenu" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
              <ul>
                <li>

                  <div class="grid grid-cols-3 gap-3">

                    <button @click="openImagePopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="basil:image-outline" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Image</span>
                    </button>

                    <button @click="openImagePopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="material-symbols-light:full-coverage-outline"
                          style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Cover</span>
                    </button>
                   

                  </div>
                </li>
              </ul>
            </div>


            <!-- Insert -->
            <div v-else-if="currentMenu === 'insertSubMenu'" class="p-2 bg-blue-50 rounded-lg w-80">
              <button @click="backToMainMenu" class="mb-4 text-sm font-bold text-blue-600 hover:text-red-600">
                ← Back
              </button>
              <ul>
                <li>

                  <div class="grid grid-cols-3 gap-3">

                    <button @click="openTableConfigPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="fluent:table-20-regular" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Table</span>
                    </button>

                    <button @click="addPageBreak"
                      class="flex flex-col gap-2 items-center py-2 px-3 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="fluent:document-page-break-20-regular" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Line Break</span>
                    </button>

                  
                   

                  </div>
                </li>
              </ul>
            </div>

            

          </div>
        </div>
      </transition>
    </div>

    <div :class="{
      'flex-1': true,
      'ml-0': !isSidebarOpen,
      'ml-0': isSidebarOpen,
    }" class="preview-section p-4">
      <h2 class="text-sm font-bold text-center text-black">Preview</h2>

      <!-- Paragraph Component -->
      <!-- <div v-for="(paragraph, index) in paragraph" :key="index">
        <ParagraphPopup :paragraphContent="paragraph.content" :paragraphStyle="paragraph.style"
          @update-content="updateParagraphContent(index, $event)" @delete="deleteParagraph(index)" />
      </div> -->
      <div v-for="(paragraph, index) in paragraphs" :key="index" class="flex gap-6 paragraph-container">
      <p :class="paragraph.style" class="dynamic-paragraph editable-heading"   contenteditable="true"
      @input="updateParagraphContent">
        Dynamic Paragraph {{ index + 1 }}
      </p>
      <button @click="deleteParagraph(index)">
        x
      </button>
    </div>

      <!-- Table Component -->
      <TablePopup v-if="tableData.length > 0" :rows="tableData" :columns="columns" :showTable="showTable"
        @delete="deleteTable(index)" />

      <!-- Heading Component -->
    <div v-if="headingConfig" :style="headingStyle" :class="headingConfig.style" class="flex heading-container">
      <component :is="'h' + headingConfig.level" class="dynamic-heading editable-heading"  contenteditable="true"
      @input="updateHeadingContent">
        {{ headingConfig.content || "Dynamic Heading" }}
      </component>
      <button @click="deleteHeading" class="delete-heading-button text-md font-bold px-2 py-1 rounded">
        <Icon icon="system-uicons:cross" />
      </button>
    </div>

      <!-- List Component -->
      <div v-for="(list, index) in lists" :key="index">
        <ListComponent :listType="list.type" :listItems="list.items" @update-content="updateListContent(index, $event)"
          @delete="deleteList(index)" />
      </div>

      <!-- Underline Component -->
      <div v-for="(underline, index) in underlines" :key="index">
        <UnderlineComponent :text="underline.text" :styleType="underline.style"
          @update-content="updateUnderline(index, $event)" @delete="deleteUnderline(index)" />
      </div>

      <!-- Position Component -->
      <div v-for="(textBlock, index) in textBlocks" :key="index" class="relative group">
        <input v-model="textBlocks[index].content" class="w-full border-none focus:outline-none focus:ring"
          :class="textBlocks[index].alignment" />
        <button @click="deletePositionText(index)" class="absolute right-0 top-0 px-2 py-1 text-black text-sm">
          x
        </button>
      </div>

      <!-- Color Style Component -->
      <div v-for="(item, index) in styledTextList" :key="index" class="flex items-center gap-2">
        <span
          :style="{ color: item.color, fontStyle: item.style === 'italic' ? 'italic' : 'normal', fontWeight: item.style === 'bold' ? 'bold' : 'normal' }"
          contenteditable="true" @input="updateText(index, $event)">
          {{ item.text }}
        </span>

        <button @click="deleteText(index)">
          <Icon icon="basil:cross-outline" style="font-size: 20px;" />
        </button>
      </div>

      <!-- Link -->
      <ul>
        <li v-for="(link, index) in links" :key="index" class="mb-2">
          <a :href="link.url" target="_blank" class="text-blue-500 underline">
            {{ link.text }}
          </a>
          <button @click="deleteLink(index)" class="ml-2 px-2 py-1 text-black">
            x
          </button>
        </li>
      </ul>

      <!-- Page Break -->
      <div v-for="(block, index) in contentBlocks" :key="index" class="relative group">
        <!-- Render Content Blocks -->
        <div v-if="block.type === 'text'" class="mb-4">
          <input v-model="block.content" placeholder="Enter text"
            class="w-full border p-2 rounded focus:outline-none focus:ring" />
        </div>

        <!-- Render Page Break -->
        <div v-else-if="block.type === 'page-break'" class="mb-4 border-t border-dashed border-gray-500 relative">
          <p class="absolute top-[-10px] left-0 text-gray-500 text-sm bg-white px-2">
          </p>
          <button @click="deleteBlock(index)" class="absolute right-2 top-[-10px] px-2 py-1 text-sm rounded">
            x
          </button>
        </div>
      </div>

      <!-- Image Component -->
      <div v-for="(image, index) in images" :key="index" class="flex items-center gap-4 mb-4">
        <img :src="image" alt="User Selected" class="max-w-[200px] max-h-[200px] object-cover" contenteditable="true" />
        <button @click="deleteImage(index)">
          X
        </button>
      </div>
    </div>

    <!-- Editor Section -->
    <div v-if="editorToolActive" class="editor-section border-2 border-gray-200 p-4 w-[300px]">
      <h2 class="text-sm font-bold text-center text-black">Editor</h2>
    </div>

    <div v-if="isSidebarOpen">
   
      <!-- Paragraph Configuration Popup -->
      <ParagraphConfigPopup
      v-if="showParagraphConfigPopup"
      :show="showParagraphConfigPopup"
      @close="showParagraphConfigPopup = false"
      @create="addParagraph"
    />

    <!-- Heading Configuration Popup -->
    <HeadingConfigPopup
      v-if="showHeadingConfigPopup"
      :show="showHeadingConfigPopup"
      @close="showHeadingConfigPopup = false"
      @create="updateHeading"
    />

    <!-- Table Configuration Popup -->
    <TableConfigPopup :show="showTableConfigPopup" @close="closeTableConfigPopup" @create="createTable" />

    <!-- List Configuration Popup -->
    <ListConfigPopup v-if="showListConfigPopup" :show="showListConfigPopup" @close="showListConfigPopup = false"
      @create-list="addList" />

    <!-- Underline Configuration Popup -->
    <UnderlineConfigPoup v-if="showUnderlineConfigPopup" @create-underline="addUnderline"
      @close="showUnderlineConfigPopup = false" />

    <!-- Position Popup -->
    <PositionPopup :show="showPositionPopup" @close="showPositionPopup = false" @add-text="addPositionText" />

    <!-- Color Popup -->
    <TextStylePopup :show="isPopupVisible" @create-styled-text="addStyledText" @close="closePopup" />

    <!-- Link Popup -->
    <LinkPopup v-if="showLinkPopup" :show="showLinkPopup" :link="currentLink" @close="closeLinkPopup"
      @save-link="saveLink" />
    <!-- Image Popup -->
    <ImagePopup :show="isImagePopupVisible" @create-image="addImage" @close="closeImagePopup" />

    <!-- BG Color -->
    <ColorPickerPopup :show="showColorPopup" @close="showColorPopup = false" @apply-colors="changeColors" />
 </div>
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
import ListComponent from './ListComponent.vue';
import ListConfigPopup from './ListConfigPopup.vue';
import UnderlineConfigPoup from './UnderlineConfigPoup.vue';
import UnderlineComponent from './UnderlineComponent.vue';
import TextStylePopup from './TextStylePopup.vue';
import ImagePopup from './ImagePopup.vue';
import LinkPopup from './LinkPopup.vue';
import PositionPopup from './PositionPopup.vue';
import ColorPickerPopup from './ColorPickerPopup.vue';

export default {
  name: "Home",
  components: {
    Icon,
    TablePopup,
    TableConfigPopup,
    HeadingPopup,
    HeadingConfigPopup,
    ParagraphConfigPopup,
    ParagraphPopup,
    ListComponent,
    ListConfigPopup,
    UnderlineConfigPoup,
    UnderlineComponent,
    TextStylePopup,
    ImagePopup,
    LinkPopup,
    PositionPopup,
    ColorPickerPopup,
  },
  data() {
    return {
      isSidebarOpen: true,
      showTableConfigPopup: false,
      showHeadingConfigPopup: false,
      showParagraphConfigPopup: false,
      showListConfigPopup: false,
      showUnderlineConfigPopup: false,
      showLinkPopup: false,
      isPopupVisible: false,
      isImagePopupVisible: false,
      editorToolActive: false,
      showTable: false,
      showPositionPopup: false,
      showColorPopup: false,
      activeEditorTool: null,
      selectedTool: null,
      newListItem: "",
      activeTools: [],
      headings: [],
      headingConfig: null,
      paragraphs: [],
      tableData: [],
      lists: [],
      underlines: [],
      styledTextList: [],
      images: [],
      links: [],
      textBlocks: [],
      contentBlocks: [],
      currentLink: null,
      columns: 0,
      currentMenu: "main",
      tools: [
        {
          id: "tool1",
          name: "Text",
        },
      ],
      tools2: [
        {
          id: "tool2",
          name: "Media",
        },
      ],

      tools3: [
        {
          id: "tool3",
          name: "Insert",
        },
      ],

    };
  },
  props :{
    headingContent: {
      type: String,
      default: "Sample Heading",
    },
  },
  computed: {
    headingStyle() {
      return {
        fontSize: `${this.headingConfig?.fontSize || 16}px`,
      };
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    
    openSubMenu(toolId) {
      this.currentMenu = toolId;
    },
    openSubMenu2(tool2Id) {
      this.currentMenu = tool2Id;
    },
    openSubMenu3(tool3Id) {
      this.currentMenu = tool3Id;
    },
    backToMainMenu() {
      this.currentMenu = "main";
    },
    getSubMenu(toolId) {
      return this.tools.find((tool) => tool.id === toolId);
    },
    getSubMenu2(tool2Id) {
      return this.tools2.find((tool2) => tool2.id === tool2Id);
    },
    getSubMenu3(tool3Id) {
      return this.tools3.find((tool3) => tool3.id === tool3Id);
    },

    // Paragraph
    openParagraphConfigPopup() {
      this.showParagraphConfigPopup = true;
    },
    closeParagraphConfigPopup() {
      this.showParagraphConfigPopup = false;
    },
    addParagraph(config) {
      this.paragraphs.push({
        style: config.style || "",
      });
    },
    updateParagraphContent(index, content) {
      this.paragraphs[index].content = content;
    },
    deleteParagraph(index) {
      this.paragraphs.splice(index, 1);
    },
    updateParagraphContent(event) {
        this.$emit("update-content", event.target.textContent);
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
    // openHeadingConfigPopup() {
    //   this.showHeadingConfigPopup = true;
    // },
    // closeHeadingConfigPopup() {
    //   this.showHeadingConfigPopup = false;
    // },
    // createHeading({ level, style }) {
    //   this.headings.push({ level, style, content: "Sample Heading" });
    // },
    // updateHeadingContent(index, content) {
    //   this.headingConfig[index].content = content;
    // },
    // deleteHeading(index) {
    //   this.headingConfig.splice(index, 1);
    // },

    // updateHeading(config) {
    //   this.headingConfig = config; 
    // },
    openHeadingConfigPopup() {
      this.showHeadingConfigPopup = true;
    },
    closeHeadingConfigPopup() {
      this.showHeadingConfigPopup = false;
    },
    updateHeading(config) {
      this.headingConfig = config;
    },
    deleteHeading() {
      this.headingConfig = null; 
    },
    updateHeadingContent(index, content) {
      this.headingConfig[index].content = content;
    },
    updateHeadingContent(event) {
      this.$emit("update-content", event.target.textContent);
    },
  
    // List
    openListConfigPopup() {
      this.showListConfigPopup = true;
    },
    addList(newList) {
      this.lists.push(newList);
      this.showListConfigPopup = false;
    },
    updateListContent(index, updatedData) {
      this.lists[index] = { ...this.lists[index], ...updatedData };
    },
    deleteList(index) {
      this.lists.splice(index, 1);
    },

    // Underline
    openUnderlineConfigPopup() {
      this.showUnderlineConfigPopup = true;
    },
    addUnderline(newUnderline) {
      this.underlines.push(newUnderline);
      this.showUnderlineConfigPopup = false;
    },
    updateUnderline(index, updatedData) {
      this.$set(this.underlines, index, { ...this.underlines[index], ...updatedData });
    },
    deleteUnderline(index) {
      this.underlines.splice(index, 1);
    },

    // Position
    addPositionText(newText) {
      this.textBlocks.push(newText);
    },
    deletePositionText(index) {
      this.textBlocks.splice(index, 1);
    },

    // Color
    openPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
    addStyledText(styledText) {
      this.styledTextList.push(styledText);
      this.closePopup();
    },
    updateText(index, event) {
      this.styledTextList[index].text = event.target.textContent;
    },
    deleteText(index) {
      this.styledTextList.splice(index, 1);
    },

    // Page Break
    addPageBreak() {
      this.contentBlocks.push({ type: "page-break" });
    },
    deleteBlock(index) {
      this.contentBlocks.splice(index, 1);
    },

    // BG Color
    changeColors({ bgColor, textColor }) {
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
      this.showColorPopup = false;
    },

    // Image
    openImagePopup() {
      this.isImagePopupVisible = true;
    },
    closeImagePopup() {
      this.isImagePopupVisible = false;
    },
    addImage(imageUrl) {
      this.images.push(imageUrl);
      this.closeImagePopup();
    },
    deleteImage(index) {
      this.images.splice(index, 1);
    },

    // Link
    openLinkPopup(link = null, index = null) {
      this.currentLink = link || { text: "", url: "" };
      this.editIndex = index;
      this.showLinkPopup = true;
    },
    closeLinkPopup() {
      this.showLinkPopup = false;
      this.currentLink = null;
      this.editIndex = null;
    },
    saveLink(linkData) {

      this.links.push(linkData);

    },
    deleteLink(index) {
      this.links.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.1s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tool-preview-section,
.editor-section {
  background: #f9f9f9;
  padding: 20px;
}

.sidebar {
  width: 350px;
  border: 1px solid #e5e7eb;
}

.content-area {
  transition: margin-left 0.3s ease;
}

.editable-heading {
  outline: none;
  cursor: text;
  direction: ltr;
}

@media (max-width: 768px) {
  .sidebar {
    margin-top: 56px;
    position: absolute;
    width: 300px;
    z-index: 20;
  }

  .content-area {
    margin-left: 0 !important;
  }
}

@media (max-width: 1000px) {
  .sidebar {
    margin-top: 56px;
    position: absolute;
    z-index: 20;
  }

  .content-area {
    margin-left: 0 !important;
  }
}



::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 1px;
}
</style>