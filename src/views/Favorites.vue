<script setup>
import {computed, ref, watchEffect} from 'vue';
import {useMoviesStore} from "../store/movies.js";
import FavoriteMovieCard from "../components/FavoriteMovieCard.vue";

const moviesStore = useMoviesStore();
const favoriteMovies = ref([]);
const favoriteMovieIds = computed(() => moviesStore.favorites);
const isEmpty = computed(() => favoriteMovies.value.length === 0);

watchEffect(async () => {
  const moviePromises = favoriteMovieIds.value.map(id => moviesStore.getMovieById(id));
  favoriteMovies.value = await Promise.all(moviePromises);
});
</script>

<template>
  <div v-if="isEmpty" class="p-12">
    <h3 class="text-2xl text-center">No favorite movies yet</h3>
    <router-link to="/" class="block text-center text-blue-400 underline">Discover movies</router-link>
    <img src="/no-data.png" alt="no data" class="w-1/2 mx-auto mt-8" />
  </div>
  <div v-else class="p-12 grid grow gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <FavoriteMovieCard v-for="movie in favoriteMovies" :key="movie.id" :movie="movie"/>
  </div>
</template>