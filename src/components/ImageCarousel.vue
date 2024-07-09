<script setup>
import {IMAGE_BASE_URL_300} from "../constants.js";

const props = defineProps({
  images: Array,
});
</script>

<template>
  <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div v-if="images.length > 0" class="relative size-full overflow-hidden rounded-lg ">

    </div>
    <div v-else class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div role="status">
        <img src="../assets/loading.svg" alt="loading"
             aria-hidden="true"
             class="w-8 h-8 text-gray-200 animate-spin"
        >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>