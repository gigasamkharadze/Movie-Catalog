<script setup>
import {IMAGE_BASE_URL_300} from "../constants.js";
import {ref} from "vue";

const currentImageIndex = ref(0);

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const setPreviousImage = () => {
  if (currentImageIndex.value === 0) {
    currentImageIndex.value = props.images.length - 1;
  } else {
    currentImageIndex.value -= 1;
  }
}

const setNextImage = () => {
  if (currentImageIndex.value === props.images.length - 1) {
    currentImageIndex.value = 0;
  } else {
    currentImageIndex.value += 1;
  }
}

</script>

<template>
  <div id="controls-carousel" class="relative " data-carousel="static">
    <div v-if="images.length > 0" class="relative rounded-lg ">
      <div v-for="(image, index) in images" :key="index"
           :class="`${index === currentImageIndex ? 'active' : 'hidden'}`">
        <img :src="`${IMAGE_BASE_URL_300}${image.file_path}`"
             class="size-full"
             :alt="`Image for ${image.title || 'the movie'}`">
      </div>
    </div>
    <div v-else class="flex items-center justify-center w-96 h-96 mx-auto border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div role="status">
        <img src="../assets/loading.svg" alt="loading"
             aria-hidden="true"
             class="w-8 h-8 text-gray-200 animate-spin">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <button
        @click="setPreviousImage"
        type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 hover:bg-gray-400/90">
            <img src="../assets/arrow.svg" alt="previous" class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180">
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button
        @click="setNextImage"
        type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 hover:bg-gray-400/90">
            <img src="../assets/arrow.svg" alt="next" class="w-4 h-4 text-white dark:text-gray-800 rotate-180">
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>
</template>