<script setup>
import {computed, onMounted, watch} from "vue";
import MainMovieCard from "../components/MainMovieCard.vue";
import SharedSearchBar from "../components/shared/SharedSearchBar.vue";
import {useRoute} from "vue-router";
import {useMoviesStore} from "../store/movies.js";

const moviesStore = useMoviesStore();
const movies = computed(() => moviesStore.movies);

const getMovies = async () => {
  await moviesStore.getMovies();
}

onMounted(() => getMovies());
const route = useRoute();

const title = computed(() => route.query.search || "");

watch(
  title,
  async (newValue) => {
    console.log(newValue);
  }
)

</script>

<template>
  <div class="px-12">
    <SharedSearchBar/>
    <div class="grid grow grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <MainMovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>