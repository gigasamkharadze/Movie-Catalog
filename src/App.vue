<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>