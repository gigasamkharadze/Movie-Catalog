<script setup>
import {computed, onMounted} from "vue";
import MainMovieCard from "../components/MainMovieCard.vue";
import SharedSearchBar from "../components/shared/SharedSearchBar.vue";
import {useMoviesStore} from "../store/movies.js";

const moviesStore = useMoviesStore();
const movies = computed(() => moviesStore.movies);

const getMovies = async () => {
  await moviesStore.getMovies();
}

const getMoviesByTitle = async (title) => {
  await moviesStore.getMoviesByTitle(title);
}

onMounted(() => getMovies());
</script>

<template>
  <div class="px-12">
    <SharedSearchBar @search="getMoviesByTitle"/>
    <div class="grid grow gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <MainMovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>