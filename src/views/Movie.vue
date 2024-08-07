<script setup>
import {useRoute} from "vue-router";
import {computed, onMounted, reactive, watch} from "vue";
import moviesApiService from "../services/api/moviesApiService.js";
import ImageCarousel from "../components/ImageCarousel.vue";
import MainMovieCard from "../components/MainMovieCard.vue";
import {useMoviesStore} from "../store/movies.js";
import MovieRaterStarts from "../components/shared/MovieRaterStarts.vue";

const route = useRoute();
const apiService = new moviesApiService();
const moviesStore = useMoviesStore();
const addedToFavorites = computed(() => moviesStore.isFavorite(movie.id));
let movie = reactive({
  title: "",
  overview: "",
  genres: [],
  production_countries: [],
  release_date: "",
  production_companies: [],
})

let images = reactive({
  backdrops: [],
});

let similarMovies = reactive({
  page: 1,
  results: []
});

const getMovieDetails = async () => {
  const movieId = route.params.id;
  const details = await apiService.getMovieById(movieId);
  Object.assign(movie, details);
}

const getMovieImages = async () => {
  const movieId = route.params.id;
  const movieImages = await apiService.getMovieImages(movieId);
  Object.assign(images, movieImages);
}

const getSimilarMovies = async () => {
  const movieId = route.params.id;
  const movies = await apiService.getSimilarMovies(movieId);
  Object.assign(similarMovies, movies);
}

const addToFavorites = () => {
  moviesStore.addToFavorites(movie.id);
}

watch(() => route.params.id, () => {
  getMovieDetails();
  getMovieImages();
  getSimilarMovies();
});

onMounted(() => {
  getMovieDetails();
  getMovieImages();
  getSimilarMovies();
});

</script>

<template>
  <div>
    <div class="flex flex-col w-3/4 mt-4 mx-auto gap-3 mb-10">
      <ImageCarousel :images="images.backdrops"/>
      <div>
        <div class="flex justify-between">
          <h2 class="mb-2 text-3xl font-bold tracking-tight text-gray-900">{{ movie.title }}</h2>
          <MovieRaterStarts/>
        </div>
        <p class="mb-3 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:me-3
                  first-letter:float-start">{{ movie.overview }}</p>
        <div class="grid grid-cols-2 gap-y-4 gap-x-2 p-4 bg-white rounded-lg">
          <span class="text-gray-700">Genres:</span>
          <div class="flex flex-wrap gap-1">
            <span v-for="genre in movie.genres"
                  :key="genre.id"
                  class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"> {{ genre.name }} </span>
          </div>
          <span class="text-gray-700">Country:</span>
          <div class="flex flex-wrap space-x-2">
            <span v-for="country in movie.production_countries"
                  :key="country.id"
                  class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"> {{ country.name }} </span>
          </div>
          <span class="text-gray-700">Release Date:</span>
          <div class="w-fit bg-teal-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            {{ movie.release_date }}
          </div>
          <span class="text-gray-700">Production:</span>
          <div class="flex flex-wrap gap-1">
            <span v-for="production in movie.production_companies" :key="production.id"
                  class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"> {{ production.name }} </span>
          </div>
        </div>
        <button
            @click="addToFavorites"
            :disabled="addedToFavorites"
            class="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mt-4">Add to favorites
        </button>
        <span v-if="addedToFavorites" class="text-green-400 ml-2 text-sm mt-2">added to favorites</span>

      </div>
    </div>
    <div>
      <h1 class="text-2xl font-semibold text-gray-800 px-6">Similar Movies</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto p-6">
        <MainMovieCard v-for="movie in similarMovies.results"
                       class=""
                       :key="movie.id"
                       :movie="movie"/>
      </div>
    </div>
  </div>

</template>