<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <div id="app" class="flex">
    <Nav />
    <div class="w-full ml-60">
      <router-view />
    </div>
  </div>
</template>