<template>
  <div class="flex h-screen">

    <transition name="slide">
      <div
        v-if="isSidebarOpen"
        class="fixed inset-y-0 left-20 w-[300px] bg-gray-300 text-white shadow-lg z-20 flex flex-col p-4 overflow-y-auto space-y-4"
      >
        <h2 class="text-xl font-bold text-center text-black">Tools</h2>

        <div v-for="(tool, index) in tools" :key="index" class="space-y-2">
          <button
            @click="toggleTool(tool)"
            class="flex justify-between w-full py-2 px-4  text-black rounded hover:bg-gray-400"
          >
            <span>{{ tool.name }}</span>
            <i
              :class="tool.isOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"
              class="text-black"
            ></i>
          </button>

          <transition name="fade">
            <div v-if="tool.isOpen" class=" grid grid-cols-3 gap-3">
              <div
                v-for="(subTool, subIndex) in tool.subTools"
                :key="subIndex"
                class="p-2 border text-black bg-white rounded text-center hover:bg-gray-100"
              >
                {{ subTool }}
              </div>
            </div>
          </transition>

        </div>
         
      </div>
    </transition>

    <button
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-30 p-2 rounded-lg focus:outline-none"
    >
      <span v-if="isSidebarOpen">
        <i class="pi pi-times" style="font-size: 1.5rem"></i>
      </span>
      <span v-else>
        <i class="pi pi-align-justify" style="font-size: 1rem; color:black"></i>
      </span>
    </button>

    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black opacity-0 z-10"
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isSidebarOpen: false,
      tools: [
        {
          name: "Heading",
          isOpen: false,
          subTools: ["H1", "H2", "H3", "H4", "H5", "H6"],
        },
        {
          name: "Text Styles",
          isOpen: false,
          subTools: ["Bold", "Italic", "Under line"],
        },
        {
          name: "Lists",
          isOpen: false,
          subTools: ["Bullet List", "Number List"],
        },

        {
          name: "Block Editor",
          isOpen: false,
          subTools: [
            "Add Block",
            "Edit Block",
            "Text Editor",
          ],
        },
        {
          name: "Appearance",
          isOpen: false,
          subTools: [
            "Themes",
            "Widgets",
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
</style>
