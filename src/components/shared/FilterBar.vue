<script setup>
import {ref} from "vue";
const isDropdownOpen = ref(false);

const emit = defineEmits(["filter-selected"]);

const props = defineProps({
  filters: Array,
});

const handleDropdownOptionClick = (filterId) => {
  emit("filter-selected", filterId);
  isDropdownOpen.value = false;
};

</script>

<template>
  <div class="relative mb-4">
    <button @click="isDropdownOpen = !isDropdownOpen"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    inline-flex items-center transition duration-200 ease-in-out"
            type="button">Filter by genre
      <img aria-hidden="true" class="w-2.5 h-2.5 ml-2" src="/dropdown-arrow.svg" alt="dropdown arrow">
    </button>

    <transition name="fade">
      <div v-if="isDropdownOpen"
           id="dropdown"
           class="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 max-h-60 overflow-y-auto custom-scroll">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li v-for="filter in filters" :key="filter.id">
            <span
                @click="handleDropdownOptionClick(filter.id)"
                class="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200 ease-in-out">{{filter.name}}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>


<style scoped>
.custom-scroll::-webkit-scrollbar {
  display: none;
}

.custom-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
