<script setup>
import {IMAGE_BASE_URL} from "../constants.js";

const props = defineProps({
  movie: Object,
  rowReverse: Boolean,
});

</script>

<template>
  <div class="flex flex-col w-[300px]">
    <img :src="IMAGE_BASE_URL + props.movie.poster_path" :alt="props.movie.title" class="rounded-xl mb-4"/>
    <div class="relative flex flex-col justify-center gap-3">
      <h2 class="text-2xl font-bold line-clamp-1">{{props.movie.title}}</h2>
      <p class="line-clamp-4">{{props.movie.overview}}</p>
      <button class="border-2 border-black w-fit px-4 py-2 text-white bg-gray-800 mb-4">Add to Favorites</button>
    </div>
  </div>
</template>
