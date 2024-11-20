<template>
     <div class="heading-container border-b py-2">
        <div class="action-buttons mt-2 flex space-x-2">
        <button @click="deleteHeading" class=" text-red-800 text-xl font-bold px-2 py-1 rounded">
            <Icon icon="system-uicons:cross" />
        </button>
      </div>
      <component :is="listType">
        <li v-for="(item, index) in listItems" :key="index">
          <input
            v-model="listItems[index]"
            placeholder="Enter item content"
          />
          <button @click="deleteItem(index)">Delete</button>
        </li>
      </component>
      <button @click="addItem">Add Item</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      listType: String,
      listItems: Array,
    },
    methods: {
      addItem() {
        this.listItems.push("New Item");
        this.$emit("update-content", { listType: this.listType, listItems: this.listItems });
      },
      deleteItem(index) {
        this.listItems.splice(index, 1);
        this.$emit("update-content", { listType: this.listType, listItems: this.listItems });
      },
    },
  };
  </script>
  