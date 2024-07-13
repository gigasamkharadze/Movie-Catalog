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

const onPageChange = async (page) => {
  currentPage.value = page;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  await getMovies(currentPage.value);
};

const getMovies = async (page) => {
  await moviesStore.getMovies(page);
};

const getMoviesByTitle = async (title) => {
  await moviesStore.getMoviesByTitle(title);
};

onMounted(() => getMovies(currentPage.value));
</script>

<template>
  <div class="px-12">
    <SharedSearchBar @search="getMoviesByTitle"/>
    <div class="grid grow gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <MainMovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
    <PagePaginationBar @page-change="onPageChange"
                       :current-page="currentPage"
                       :total-pages="totalPages"/>
  </div>
</template>