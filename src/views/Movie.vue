<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive} from "vue";
import moviesApiService from "../services/api/moviesApiService.js";
import ImageCarousel from "../components/ImageCarousel.vue";

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

onMounted(() => {
  getMovieDetails();
  getMovieImages();
});

</script>

<template>
  <div class="flex flex-col lg:flex-row p-6 gap-3 ">
    <ImageCarousel :images="[]" />
    <div class="">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{movie.title}}</h5>
      <p class="mb-3 font-normal text-gray-700">{{movie.overview}}</p>
      <div class="w-1/3 grid grid-cols-2">
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

</template>