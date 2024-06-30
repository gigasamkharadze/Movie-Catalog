<template>
  <div class="flex flex-col gap-3">
    <MainMovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup>
import {API_KEY} from "../../config.js";
import {onMounted} from "vue";
import {ref} from "vue";
import MainMovieCard from "../components/MainMovieCard.vue";

const movies = ref([]);

async function getMovies(){
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=${API_KEY}`, options);
  const data = await response.json();
  movies.value = data.results;
}

onMounted(() => getMovies());
</script>