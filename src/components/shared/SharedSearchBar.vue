<script setup>
import {getCurrentInstance, ref} from "vue";

const title = ref("");

const {emit} = getCurrentInstance();
const search = (title) => {
  emit("search", title);
}

</script>

<template>
  <div class="w-[300px] relative flex items-center">
    <input type="text"
           id="title"
           name="title"
           v-model="title"
           placeholder="Search for a movie"
           class="w-full my-4 mx-auto py-3 px-4 border border-gray-300 rounded-xl focus:outline-gray-400"
           @keyup.enter="search(title)"
    />
    <img src="/search.png"
         alt="search icon"
         class="w-8 aspect-square absolute right-3 hover:cursor-pointer"
         @click="search(title)"
    >
  </div>
</template>
