<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";

const title = ref("");
const router = useRouter();

watch(title, (newValue) => {
  router.push({query: {search: newValue}});
});
</script>

<template>
  <div class="w-[300px] relative flex items-center">
    <input type="text"
           id="title"
           name="title"
           v-model="title"
           placeholder="Search for a movie"
           class="w-full my-4 mx-auto py-3 px-4 border border-gray-300 rounded-xl focus:outline-gray-400" />
    <img src="/search.png" alt="search icon" class="w-8 aspect-square absolute right-3 hover:cursor-pointer">
  </div>
</template>
