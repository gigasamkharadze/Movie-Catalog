<script setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: "What is this movie catalog app?",
    content: `<p>This movie catalog app allows users to browse, search, and filter through a wide collection of movies, providing detailed information about each title.</p>
              <p>Explore the features of the app to make the most out of your movie browsing experience.</p>
              <p>You can also save your favorite movies for easy access later, and rate and review movies to share your thoughts with other users.</p>`,
    isOpen: false,
  },
  {
    title: "How can I save my favorite movies?",
    content: `<p>You can save your favorite movies by clicking the 'add to favorites' button on the movie details page. These movies will be stored in your local storage for easy access later.</p>
              <p>Check out your favorites section to see all the movies you've saved.</p>`,
    isOpen: false,
  },
  {
    title: "How to rate movies?",
    content: `<p>To rate a movie, go to the movie details page and click on the star rating system to give the movie a rating from 1 to 5 stars.</p>
              <p>Your rating will be saved and displayed on the movie details page for other users to see.</p>`,
    isOpen: false,
  },
  {
    title: "How to search for movies?",
    content: `<p>To search for movies, use the search bar at the top of the page. You can enter the title, genre, or any keyword related to the movie you're looking for.</p>
              <p>Combine filters and sorting options to refine your search results and find exactly what you're looking for.</p>`,
    isOpen: false,
  },
]);

const toggleAccordion = (index) => {
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen;
};

</script>
<template>
  <div id="accordion-movie-info" class="px-4 mt-4">
    <div v-for="(item, index) in accordionItems" :key="index">
      <h2 :id="'accordion-heading-' + (index + 1)">
        <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b hover:bg-gray-100 gap-3"
            @click="toggleAccordion(index)"
            :aria-expanded="item.isOpen"
            :aria-controls="'accordion-body-' + (index + 1)"
        >
          <span>{{ item.title }}</span>
          <img :class="{'rotate-180': item.isOpen}"
               class="w-3 h-3 transform"
                src="/help-arrow.svg"
               alt="arrow to extend answer">

        </button>
      </h2>
      <div
          :id="'accordion-body-' + (index + 1)"
          v-show="item.isOpen"
          class="p-5"
          :aria-labelledby="'accordion-heading-' + (index + 1)"
      >
        <div v-html="item.content" class="text-gray-500"></div>
      </div>
    </div>
  </div>
</template>