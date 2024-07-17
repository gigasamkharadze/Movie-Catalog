<script setup>
import {useMoviesStore} from "../store/movies.js";
import {IMAGE_BASE_URL_300} from "../constants.js";

const props = defineProps({
  movie: Object,
});

const moviesStore = useMoviesStore();
const removeFromFavorites = () => {
  moviesStore.removeFromFavorites(props.movie.id);
};

</script>

<template>
  <div class="flex flex-col max-w-sm border border-gray-200 rounded-lg shadow">
    <router-link :to="{ name: 'movie-details', params: { id: props.movie.id } }">
      <img
          :src="props.movie.poster_path ? `${IMAGE_BASE_URL_300}${props.movie.poster_path}` : '/image-placeholder.svg'"
          alt="movie poster"
          class="rounded-t-lg"
      />
    </router-link>
    <div class="flex flex-col flex-1 p-5">
      <router-link :to="{ name: 'movie-details', params: { id: props.movie.id } }">
        <h2 class="mb-2 text-2xl font-bold tracking-tight">{{props.movie.title}}</h2>
      </router-link>
      <p class="line-clamp-2 font-normal">{{props.movie.overview}}</p>
      <div class="flex items-center">
        <img src="../assets/star.svg" class="w-4 h-4 me-1" alt="star icon" />
        <p class="ms-2 text-sm font-bold text-gray-900">{{props.movie.vote_average}}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <span class="text-sm font-medium text-gray-900 underline">{{props.movie.vote_count}} reviews</span>
      </div>
    </div>
    <button type="button"
            @click="removeFromFavorites"
            class="text-red-600 hover:text-white border border-red-700 hover:bg-red-700 font-medium
      rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
  </div>
</template>
