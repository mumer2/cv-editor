<template>
  <div class="flex h-screen">
    <!-- Sidebar Toggle Button -->
    <div>
      <button @click="toggleSidebar" class="fixed top-[12px] left-3 z-50 p-2 rounded-lg focus:outline-none">
        <i class="pi pi-bars" style="font-size: 1.3rem; color: black"></i>
      </button>
    </div>

    <!-- Sidebar -->
    <div v-if="isSidebarOpen"
      class="sidebar bg-white inset-y-0 left-0 w-[200px] lg:w-[350px] text-white border z-20 flex flex-col p-4 overflow-y-auto space-y-4">
      <h2 class="text-sm font-bold text-center text-black">Tools</h2>
      <div class="relative my-6">
        <input id="id-s01" type="search" name="id-s01" placeholder="Search here" aria-label="Search content"
          class="peer relative rounded h-10 w-full border border-slate-200 px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-300 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
      </div>

      <div class="relative w-full h-screen flex">
        <!-- Main Tools Menu -->
        <div v-if="currentMenu === 'main'" class="p-2 rounded-lg w-full">
          <div class="grid grid-cols-3 gap-3">
            <button v-for="tool in tools" :key="tool.id" @click="openSubMenu('textSubMenu', tool.id)"
              class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span>
                <Icon icon="oui:editor-heading" style="color: black;font-size: 26px;" />
              </span>
              <span class="text-sm">{{ tool.name }}</span>
            </button>

            <button v-for="tool2 in tools2" :key="tool2.id" @click="openSubMenu2('paragraphSubMenu', tool2.id)"
              class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span>
                <Icon icon="system-uicons:paragraph-end" style="color: black;font-size: 26px;" />
              </span>
              <span class="text-sm">{{ tool2.name }}</span>
            </button>

            <button v-for="tool3 in tools3" :key="tool3.id" @click="openSubMenu3('listSubMenu', tool3.id)"
              class="flex  flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span>
                <Icon icon="tabler:list" style="color: black;font-size: 26px;" />
              </span>
              <span class="text-sm">{{ tool3.name }}</span>
            </button>
          </div>
        </div>
        <!-- Heading Menu -->
        <div v-else-if="currentMenu === 'textSubMenu'" class="p-0 bg-blue-50 rounded-lg w-80">
          <button @click="backToMainMenu" class="mb-4 text-sm font-bold text-gray-500 hover:text-gray-800">
            <Icon icon="eva:arrow-back-fill" width="26" height="24" />
          </button>

          <h2 class="text-black font-bold">Select Heading Styles</h2>
          <div class="grid grid-cols-2 mt-3">
            <button @click="selectHeadingStyle('heading1')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="font-bold text-blue-600 bg-gray-200 px-3 py-1 rounded-lg text-center">Text with BG</span>
            </button>
            <button @click="selectHeadingStyle('heading2')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span class="font-courier text-gray-600">Courier New</span>
            </button>
            <button @click="selectHeadingStyle('heading3')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span class="font-mono text-gray-600">Mono Space</span>
            </button>
            <button @click="selectHeadingStyle('heading4')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span class="text-sm p-2 font-bold bg-yellow-600 text-center">Highlight Text</span>
            </button>

            <button @click="selectHeadingStyle('heading5')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Gradient
                Text</span>
            </button>
            <button @click="selectHeadingStyle('heading6')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span class="underline decoration-pink-500">Underlined Text</span>
            </button>
            <button @click="selectHeadingStyle('heading7')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span class="uppercase tracking-wide text-gray-700 text-sm">SmallCaps</span>
            </button>
            <button @click="selectHeadingStyle('heading8')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">

              <span class="border border-blue-500 text-blue-500 px-2 py-1">Border Text</span>
            </button>
            <button @click="selectHeadingStyle('heading11')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="text-2xl text-green-400 shadow-[0_0_5px_#39FF14,_0_0_10px_#39FF14,_0_0_15px_#39FF14]">Neon
                Glow</span>
            </button>
            <button @click="selectHeadingStyle('heading12')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="text-4xl text-gray-800 shadow-[2px_2px_4px_rgba(0,0,0,0.6),_4px_4px_8px_rgba(0,0,0,0.2)]">3D
                Effect</span>
            </button>
          </div>

        </div>

        <!-- Paragraph Menu -->
        <div v-else-if="currentMenu === 'paragraphSubMenu'" class="p-0 bg-blue-50 rounded-lg w-80">
          <button @click="backToMainMenu" class="mb-4 text-sm font-bold text-gray-500 hover:text-gray-800">
            <Icon icon="eva:arrow-back-fill" width="26" height="24" />
          </button>

          <h2 class="text-black font-bold">Select Paragraph Styles</h2>
          <div class="grid grid-cols-2 mt-3">
            <button @click="selectHeadingStyle('heading9')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="text-black">Normal</span>
            </button>
            <button @click="selectHeadingStyle('heading10')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="text-xl font-dancing-script">Sensherif</span>
            </button>

          </div>
        </div>

        <!-- List Menu -->
        <div v-else-if="currentMenu === 'listSubMenu'" class="p-0 bg-blue-50 rounded-lg w-80">
          <button @click="backToMainMenu" class="mb-4 text-sm font-bold text-gray-500 hover:text-gray-800">
            <Icon icon="eva:arrow-back-fill" width="26" height="24" />
          </button>

          <h2 class="text-black font-bold">Select List Type</h2>
          <div class="grid grid-cols-2 mt-3">

            <button @click="selectListStyle('unordered')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="text-black">Unordered List</span>
            </button>
            <button @click="selectListStyle('ordered')"
              class="flex flex-col gap-2 items-center py-2 px-4 text-black rounded hover:bg-slate-200">
              <span class="text-black">Ordered List</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Preview Section -->
    <div :class="{ 'flex-1': true }" class="preview-section p-4">
      <h2 class="text-sm font-bold text-center text-black">Preview</h2>
      <div class="preview-area" @click="openEditorForPreview" v-html="previewContent"></div>
    </div>

    <!-- Editor Section -->
    <div>
      <div v-if="editorToolActive" class="editor-section border p-4 w-[300px]">
        <button @click="closeEditor" class="absolute top-17 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close Editor">
          <Icon icon="basil:cross-outline" style="font-size: 26px;" />
        </button>
        <h2 class="text-sm font-bold text-center text-black">Editor</h2>

        <div v-if="currentStyle === 'heading'">
          <label for="headingText">Heading Text</label>
          <input v-model="headingText" type="text" id="headingText" class="w-full mt-2 p-2 border rounded"
            placeholder="Enter Heading Text">

          <label for="fontSize" class="mt-2">Font Size</label>
          <input v-model="headingFontSize" type="number" id="fontSize" class="w-full mt-2 p-2 border rounded"
            placeholder="Font Size">

          <label for="fontColor" class="mt-2">Font Color</label>
          <input v-model="headingFontColor" type="color" id="fontColor" class="w-full h-10 mt-2 p-2 border rounded">

          <button @click="updatePreview" class="mt-4 p-2 bg-blue-500 text-white rounded">Update Preview</button>
        </div>
        <div v-if="currentStyle === 'list'">
          <label for="listType">List Type</label>
          <select v-model="selectedListType" id="listType" class="w-full mt-2 p-2 border rounded">
            <option value="disc">Disc</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="decimal">Numbered</option>
          </select>

          <label for="listItems" class="mt-2">List Items</label>
          <textarea v-model="listItems" id="listItems" class="w-full mt-2 p-2 border rounded"
            placeholder="Enter items, one per line"></textarea>

          <button @click="updateListPreview" class="mt-4 p-2 bg-blue-500 text-white rounded">Update Preview</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: "Home",
  components: {
    Icon,
  },
  data() {
    return {
      isSidebarOpen: true,
      editorToolActive: false,
      showStyleSelector: false,
      currentMenu: "main",
      currentStyle: null,
      headingText1: "Text with BG",
      headingText2: "Courier New",
      headingText3: "Mono Space",
      headingText4: "Highlight Text",
      headingText5: "Gradient text",
      headingText6: "Underlined Text",
      headingText7: "SmallCaps",
      headingText8: "Border Text",
      headingText9: "Normal",
      headingText10: "Sensherif",
      headingText11: "Neon Glow",
      headingText12: "3D Effect",

      selectedListType: 'disc',
      editorToolActive: false,
      listStyle: '',
      listItems: [],
      selectedList: null,
      newListText: '',
      headingFontSize: 24,
      headingFontColor: "#000000",
      previewContent: "",
      tools: [
        {
          id: "tool1",
          name: "Heading",
        },
      ],
      tools2: [
        {
          id: "tool2",
          name: "Paragraph",
        },
      ],
      tools3: [
        {
          id: "tool3",
          name: "List",
        },
      ],
    };
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

    selectHeadingStyle(style) {
      this.selectedHeading = style === 'heading1' ? 'h1' :
        style === 'heading2' ? 'h2' :
          style === 'heading3' ? 'h3' :
            style === 'heading4' ? 'h4' :
              style === 'heading5' ? 'h5' :
                style === 'heading6' ? 'h6' :
                  style === 'heading7' ? 'h7' :
                    style === 'heading8' ? 'h8' :
                      style === 'heading9' ? 'h9' :
                        style === 'heading10' ? 'h10' :
                          style === 'heading11' ? 'h11' :
                            style === 'heading12' ? 'h12' :


                              'h13'; // Default

      this.previewContent = `
    <${this.selectedHeading} 
      class="text-lg font-bold ${style === 'heading1' ? 'text-blue-600 bg-gray-200' :
          style === 'heading2' ? 'font-courier text-gray-600' :
            style === 'heading3' ? 'font-mono' :
              style === 'heading4' ? 'bg-yellow-600 text-center' :
                style === 'heading5' ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500' :
                  style === 'heading6' ? 'underline decoration-pink-500' :
                    style === 'heading7' ? 'uppercase tracking-wide text-gray-700 text-sm' :
                      style === 'heading8' ? 'border border-blue-500 text-blue-500 px-2 py-1' :
                        style === 'heading9' ? 'text-black font-normal' :
                          style === 'heading10' ? 'text-xl font-semibold font-dancing-script' :
                            style === 'heading11' ? 'text-2xl text-green-400 shadow-[0_0_5px_#39FF14,_0_0_10px_#39FF14,_0_0_15px_#39FF14]' :
                              style === 'heading12' ? 'text-4xl text-gray-800 shadow-[2px_2px_4px_rgba(0,0,0,0.6),_4px_4px_8px_rgba(0,0,0,0.2)]' :

                                'border border-blue-500 text-blue-500 px-2 py-1'}">
      ${this[`headingText${style.slice(-1)}`]}
    </${this.selectedHeading}>`;
    },

    openEditorForPreview(event) {
      const clickedElement = event.target;
      if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13'].includes(clickedElement.tagName)) {
        this.currentStyle = 'heading';
        this.editorToolActive = true;
        this.selectedHeading = clickedElement.tagName.toLowerCase();
        this.headingText = clickedElement.innerText;
        this.headingFontSize = parseInt(window.getComputedStyle(clickedElement).fontSize);
        this.headingFontColor = window.getComputedStyle(clickedElement).color;
      }
      else if (clickedElement.tagName === 'LI' || clickedElement.tagName === 'UL' || clickedElement.tagName === 'OL') {
        this.selectedList = clickedElement.closest('ul, ol');
        this.editorToolActive = true;
        this.currentStyle = 'list';
      }
    },
    
    addListItem() {
      if (this.newListText.trim() !== '') {
        const newItem = `<li>${this.newListText}</li>`;
        this.selectedList.innerHTML += newItem;
        this.newListText = '';
      }
    },
    updateListPreview() {
      const updatedHTML = this.selectedList.outerHTML;
      this.previewContent = this.previewContent.replace(this.selectedList.outerHTML, updatedHTML);
      this.closeEditor();
    },

    closeEditor() {
      this.editorToolActive = false; 
    },

    updatePreview() {
      if (this.currentStyle === 'heading') {
        const headingClass = this.previewContent.match(/class="([^"]*)"/)[1]; // Extract the existing class
        this.previewContent = `
      <${this.selectedHeading} 
        class="${headingClass}" 
        style="font-size:${this.headingFontSize}px; color:${this.headingFontColor};">
        ${this.headingText}
      </${this.selectedHeading}>`;
      }
    },

    selectListStyle(style) {
      this.listStyle = style;
      this.createList();
      this.currentMenu = 'main';
    },

    createList() {
      this.listItems = ['Item 1', 'Item 2', 'Item 3'];
      if (this.listStyle === 'unordered') {
        this.previewContent += `<ul>${this.listItems
          .map((item) => `<li>${item}</li>`)
          .join('')}</ul>`;
      } else if (this.listStyle === 'ordered') {
        this.previewContent += `<ol>${this.listItems
          .map((item) => `<li>${item}</li>`)
          .join('')}</ol>`;
      }
    },
    generateList(style, items) {
      const listItemsHtml = items
        .split('\n')
        .map((item) => `<li>${item}</li>`)
        .join('');
      return `<ul style="list-style-type: ${style}">${listItemsHtml}</ul>`;
    },
    updateListPreview() {
      this.previewContent = this.generateList(this.selectedListType, this.listItems);
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

/* ScrollBar */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 1px;
}
</style>