<script setup>
import {computed, ref, watchEffect} from 'vue';
import {useMoviesStore} from "../store/movies.js";
import FavoriteMovieCard from "../components/FavoriteMovieCard.vue";

const moviesStore = useMoviesStore();
const favoriteMovies = ref([]);

const favoriteMovieIds = computed(() => moviesStore.favorites);

watchEffect(async () => {
  const moviePromises = favoriteMovieIds.value.map(id => moviesStore.getMovieById(id));
  favoriteMovies.value = await Promise.all(moviePromises);
});
</script>

<template>
  <div class="p-12 grid grow gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <FavoriteMovieCard v-for="movie in favoriteMovies" :key="movie.id" :movie="movie"/>
  </div>
</template>