
<script setup>
import {computed, onMounted, ref} from "vue";
import MainMovieCard from "../components/MainMovieCard.vue";
import SharedSearchBar from "../components/shared/SharedSearchBar.vue";
import PagePaginationBar from "../components/shared/PagePaginationBar.vue";
import {useMoviesStore} from "../store/movies.js";

const moviesStore = useMoviesStore();
const movies = computed(() => moviesStore.movies);
const totalPages = 500;
const currentPage = ref(1);
const title = ref("");
const isLoading = ref(true); // Added loading state

const onPageChange = async (page) => {
  isLoading.value = true;
  currentPage.value = page;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (title.value) {
    await moviesStore.getMoviesByTitle(title.value, currentPage.value);
  } else {
    await moviesStore.getMovies(currentPage.value);
  }
  isLoading.value = false;
};

const getMovies = async (page) => {
  isLoading.value = true;
  await moviesStore.getMovies(page);
  isLoading.value = false;
};

const searchMovies = async (movieTitle) => {
  isLoading.value = true;
  currentPage.value = 1;
  title.value = movieTitle;
  await moviesStore.getMoviesByTitle(movieTitle, currentPage.value);
  isLoading.value = false;
};

onMounted(() => getMovies(currentPage.value));
</script>

<template>
  <div class="px-12">
    <SharedSearchBar @search="searchMovies"/>
    <div v-if="isLoading" class="h-16 flex justify-center items-center gap-4">
      <img
          class="w-6 h-6 animate-spin"
          src="../assets/loading.svg"
          alt="Loading...">
      <span class="text-xl">Loading movies...</span>
    </div>
    <div v-else class="grid grow gap-x-4 gap-y-8 grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <MainMovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
    <PagePaginationBar v-if="!isLoading"
                        @page-change="onPageChange"
                       :current-page="currentPage"
                       :total-pages="totalPages"/>
  </div>
</template>