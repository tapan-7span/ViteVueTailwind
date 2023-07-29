<template>
  <div class="w-64 h-64 border border-black overflow-scroll">
    <h2 class="text-lg font-medium mb-4">Sidebar</h2>
    <ul class="overflow-hidden">
      <li v-for="(item, index) in displayedItems" :key="index" class="py-1">
        {{ item }}
      </li>
    </ul>
    <button
      v-if="!showAll"
      class="text-blue-500 font-medium hover:underline mt-2"
      @click="showAll = true"
    >
      Show more
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAll: false,
      limit: 5,
      items: [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10",
        "Item 11",
        "Item 12",
        "Item 13",
        "Item 14",
        "Item 15",
        "Item 16",
        "Item 17",
        "Item 18",
        "Item 19",
        "Item 20",
      ],
    };
  },
  computed: {
    displayedItems() {
      return this.showAll ? this.items : this.items.slice(0, this.limit);
    },
  },
};
</script>
