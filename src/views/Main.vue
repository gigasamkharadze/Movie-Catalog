<script setup>
import {API_KEY} from "../../config.js";
import {computed, onMounted, watch} from "vue";
import {ref} from "vue";
import MainMovieCard from "../components/MainMovieCard.vue";
import SharedSearchBar from "../components/shared/SharedSearchBar.vue";
import {useRoute} from "vue-router";

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