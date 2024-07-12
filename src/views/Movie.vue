<script setup>
import {useRoute} from "vue-router";
import {onMounted, onUpdated, reactive, watch} from "vue";
import moviesApiService from "../services/api/moviesApiService.js";
import ImageCarousel from "../components/ImageCarousel.vue";
import MainMovieCard from "../components/MainMovieCard.vue";

const route = useRoute();
const apiService = new moviesApiService();
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
    <div class="flex flex-col w-9/12 mx-auto p-6 gap-3 shadow-2xl mb-10">
      <ImageCarousel :images="images.backdrops" />
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{movie.title}}</h5>
        <p class="mb-3 font-normal text-gray-700">{{movie.overview}}</p>
        <div class="grid grid-cols-2">
          <span class="font-semibold text-gray-700">Genres:</span>
          <div><span v-for="genre in movie.genres" class="mr-2"> {{genre.name}}</span></div>
          <span class="font-semibold text-gray-700">Country:</span>
          <div><span v-for="country in movie.production_countries" class="mr-2"> {{country.name}}</span></div>
          <span class="font-semibold text-gray-700">Release Date:</span>
          <div>{{movie.release_date}}</div>
          <span class="font-semibold text-gray-700">Production:</span>
          <div><span v-for="production in movie.production_companies" class="mr-2"> {{production.name}}</span></div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-2xl font-bold text-gray-900 p-6">Similar Movies</h1>
      <div class="grid grid-cols-3 gap-4 overflow-x-auto p-6">
        <MainMovieCard v-for="movie in similarMovies.results"
                       class="min-w-[300px]"
                       :key="movie.id"
                       :movie="movie" />
      </div>
    </div>
  </div>

</template>