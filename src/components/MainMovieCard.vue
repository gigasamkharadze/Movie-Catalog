<script setup>
const IMAGE_BASE_URL_300 = import.meta.env.VITE_IMAGE_BASE_URL_300;

const props = defineProps({
  movie: Object,
});

</script>

<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <router-link :to="{ name: 'movie-details', params: { id: props.movie.id } }">
      <img
        :src="`${IMAGE_BASE_URL_300}${props.movie.poster_path}`"
        alt="movie poster"
        class="w-full h-64 object-cover rounded-t-lg"
      />
    </router-link>
    <div class="p-5">
      <router-link :to="{ name: 'movie-details', params: { id: props.movie.id } }">
        <h2 class="mb-2 text-2xl font-bold tracking-tight">{{props.movie.title}}</h2>
      </router-link>
      <p class="line-clamp-4 mb-3 font-normal">{{props.movie.overview}}</p>
      <div class="flex items-center mb-4">
        <img src="../assets/star.svg" class="w-4 h-4 me-1" alt="star icon" />
        <p class="ms-2 text-sm font-bold text-gray-900">{{props.movie.vote_average}}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <span class="text-sm font-medium text-gray-900 underline">{{props.movie.vote_count}} reviews</span>
      </div>
      <router-link to="/favorites" class="inline-flex items-center px-4 py-3 text-sm font-medium text-center
                                            text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add to Favorites
      </router-link>
    </div>
  </div>
</template>
