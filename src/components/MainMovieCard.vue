<template>
  <div>
    <h1>{{props.movie.title}}</h1>
    <p>{{props.movie.overview}}</p>
    <p>{{props.movie.release_date}}</p>
    <p>{{props.movie.vote_average}}</p>
    <p>{{props.movie.vote_count}}</p>
    <img :src="IMAGE_BASE_URL + props.movie.poster_path" :alt="props.movie.title" />
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {IMAGE_BASE_URL} from "../../config.js";

const props = defineProps({
  movie: Object
});


</script>
