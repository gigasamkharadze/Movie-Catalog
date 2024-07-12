<script setup>
import {getCurrentInstance, ref} from "vue";

const title = ref("");

const {emit} = getCurrentInstance();
const search = (title) => {
  emit("search", title);
}

</script>

<template>
  <form class="w-full m-6 mx-auto" @submit.prevent="search(title)">
    <label for="title" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center px-3 pointer-events-none">
        <img src="../../assets/search.svg" alt="search icon" class="w-5 h-5 text-gray-400 dark:text-gray-300" />
      </div>
      <input type="search"
             id="title"
             name="title"
             v-model="title"
             @keyup.enter="search(title)"
             class="block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
             placeholder="Search Movies, TV shows ..." />
      <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg
                 text-sm px-4 py-2">Search</button>
    </div>
  </form>
</template>