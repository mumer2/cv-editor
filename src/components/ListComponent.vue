<template>
     <div class="heading-container border-b py-2">
        <div class="action-buttons mt-2 flex space-x-2">
        <button @click="deleteHeading" class=" text-red-800 text-xl font-bold px-2 py-1 rounded">
            <Icon icon="system-uicons:cross" />
        </button>
      </div>
      <component
    :is="listType"
    :style="{ listStyleType: listStyle }" 
    class="list-container"
  >
    <li v-for="(item, index) in listItems" :key="index" class="list-item ml-5">
      <input 
        v-model="listItems[index]"
        placeholder="Enter item content"
        class="border rounded p-1"
      />
      <button @click="deleteItem(index)" class="ml-2">x</button>
    </li>
  </component>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    listType: {
      type: String,
      default: "ul",
    },
    listStyle: {
      type: String,
      default: "disc",
    },
    listItems: {
      type: Array,
      default: () => ["Example Item 1", "Example Item 2"],
    },
  },
    methods: {
      addItem() {
        this.listItems.push("New Item");
        this.$emit("update-content", { listType: this.listType, listItems: this.listItems });
      },
      deleteItem(index) {
      this.listItems.splice(index, 1);
    },
    },
  };
  </script>
  