<script setup>
import {onMounted, ref, watch} from 'vue';
import {useRoute} from "vue-router";

const hoveredStar = ref(0);
const chosenStar = ref(0);
const route = useRoute();

const handleMouseOver = (index) => {
  hoveredStar.value = index;
}

const handleMouseLeave = () => {
  hoveredStar.value = 0;
}

const handleMouseClick = (index) => {
  chosenStar.value = index;
}

watch(() => route.path, () => {
  chosenStar.value = 0;
});

</script>

<template>
  <div class="flex items-center gap-2">
    <svg v-for="index in 5"
         :id="index"
         class="w-6 h-6 cursor-pointer"
         @mouseover="handleMouseOver(index)"
         @mouseleave="handleMouseLeave"
         @click="handleMouseClick(index)"
         xmlns="http://www.w3.org/2000/svg"
         :fill="chosenStar > 0
            ? (index <= chosenStar ? '#FAA916' : 'none')
            : (index <= hoveredStar ? '#FAA916' : 'none')"
         viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" stroke="gray"/>
    </svg>
  </div>
</template>