<template>
  <div class="flex h-screen">
    
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

    <div>
      <transition name="slide">
        <div v-if="isSidebarOpen"
          class="sidebar inset-y-0  left-0 w-[350px] text-white border border-gray-300 shadow-lg z-20 flex flex-col p-4 overflow-y-auto space-y-4">
          <h2 class="text-sm font-bold text-center text-black">Tools</h2>

          <div class="relative my-6">
            <input id="id-s01" type="search" name="id-s01" placeholder="Search here" aria-label="Search content"
              class="peer relative h-10 w-full border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-300 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
          </div>

          <!-- Text -->
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
                    <button @click="openTableConfigPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="fluent:table-20-regular" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Table</span>
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

                    <button @click="openPopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="unjs:theme-colors" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Color style</span>
                    </button>

                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Media -->
          <div v-for="(tool2, index) in tool2s" :key="index" class="space-y-2">
            <button @click="toggleTools(tool2s)"
              class="flex justify-between w-full py-2 px-4 text-black rounded hover:bg-slate-200 ">
              <span class="text-gray-600 text-sm">{{ tool2.name }}</span>
              <i :class="tool2s.isOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"
                style="font-size: 0.7rem; margin-top: 6px;" class="text-black"></i>
            </button>

            <transition name="fade">
              <div v-if="tool2s.isOpen">
                <div @click="openEditor(subTool)">
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
                        <Icon icon="material-symbols-light:full-coverage-outline" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">Cover</span>
                    </button>

                    <button @click="openImagePopup"
                      class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
                      <span>
                        <Icon icon="mage:file-2" style="color: black;font-size: 26px;" />
                      </span>
                      <span class="text-sm">File</span>
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
      <TablePopup v-if="tableData.length > 0" :rows="tableData" :columns="columns" :showTable="showTable"
        @delete="deleteTable(index)" />

      <!-- Heading Component -->
      <div v-for="(heading, index) in headings" :key="index">
        <HeadingPopup :headingLevel="heading.level" :headingContent="heading.content" :headingStyle="heading.style"
          @update-content="updateHeadingContent(index, $event)" @delete="deleteHeading(index)" />
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



        <!-- Image Component -->
    <div v-for="(image, index) in images" :key="index" class="flex items-center gap-4 mb-4">
        <img
          :src="image"
          alt="User Selected"
          class="max-w-[200px] max-h-[200px] object-cover"
          contenteditable="true"
        />
        <button
          @click="deleteImage(index)"
        >
          X
        </button>
      </div>
    </div>

  
    



    <!-- Editor Section -->
    <div v-if="editorToolActive" class="editor-section border-2 border-gray-200 p-4 w-[300px]">
      <h2 class="text-sm font-bold text-center text-black">Editor</h2>
    </div>

    <!-- Paragraph Configuration Popup -->
    <ParagraphConfigPopup :show="showParagraphConfigPopup" @close="closeParagraphConfigPopup"
      @create="createParagraph" />

    <!-- Heading Configuration Popup -->
    <HeadingConfigPopup :show="showHeadingConfigPopup" @close="closeHeadingConfigPopup" @create="createHeading" />

    <!-- Table Configuration Popup -->
    <TableConfigPopup :show="showTableConfigPopup" @close="closeTableConfigPopup" @create="createTable" />

    <!-- List Configuration Popup -->
    <ListConfigPopup v-if="showListConfigPopup" :show="showListConfigPopup" @close="showListConfigPopup = false"
      @create-list="addList" />

    <!-- Underline Configuration Popup -->
    <UnderlineConfigPoup v-if="showUnderlineConfigPopup" @create-underline="addUnderline"
      @close="showUnderlineConfigPopup = false" />

    <!-- Color Popup -->
    <TextStylePopup :show="isPopupVisible" @create-styled-text="addStyledText" @close="closePopup" />

    <!-- Image Popup -->
    <ImagePopup
      :show="isImagePopupVisible"
      @create-image="addImage"
      @close="closeImagePopup"
    />
  
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
      showListConfigPopup: false,
      lists: [],
      showUnderlineConfigPopup: false,
      underlines: [],
      isPopupVisible: false,
      styledTextList: [],
      isImagePopupVisible: false, 
      images: [],
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
        },
      ],
      tool2s: [
        {
          name: "Media",
          isOpen: true,
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
    toggleTools(tools) {
      tools.isOpen = !tools.isOpen;
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

    // Image
    openImagePopup() {
      this.isImagePopupVisible = true;
    },
    closeImagePopup() {
      this.isImagePopupVisible = false;
    },
    addImage(imageUrl) {
      this.images.push(imageUrl); // Add image URL to the list
      this.closeImagePopup();
    },
    deleteImage(index) {
      this.images.splice(index, 1); // Remove the image from the list
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
  background-color: #f9f9f9;
  border: 1px solid #e5e7eb;
}

.content-area {
  transition: margin-left 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    margin-top: 56px;
    position: absolute;
    width: 50%;
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
    width: 75%;
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