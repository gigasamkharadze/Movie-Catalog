<script setup>
import {computed, onMounted, watch} from "vue";
import {ref} from "vue";
import MainMovieCard from "../components/MainMovieCard.vue";
import SharedSearchBar from "../components/shared/SharedSearchBar.vue";
import {useRoute} from "vue-router";
import MoviesApiService from "../services/api/moviesApiService.js";

const movies = ref([]);

async function getMovies(){
  const moviesApiService = new MoviesApiService('discover/movie');
  const data = await moviesApiService.fetch('page=1')
  movies.value = data.results;
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