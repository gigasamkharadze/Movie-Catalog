<script setup>
const props = defineProps({
  currentPage: Number,
  totalPages: Number
})

const emit = defineEmits([
  'page-change'
])

const handlePageChange = (page) => {
  emit('page-change', page)
}

const pagination = (currentPage, totalPages) => {
  const delta = 2;
  const range = [];
  for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
    range.push(i);
  }
  range.unshift(1);
  range.push(totalPages);
  return range;
}

</script>

<template>
  <div class="w-full">
    <ul class="flex justify-center mt-6 mb-10 -space-x-px text-base h-10">
      <li
          @click="handlePageChange(currentPage - 1)"
          v-if="currentPage > 1">
        <span class="flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-white border border-gray-300
        rounded-s-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer">Previous</span>
      </li>
      <li
          @click="handlePageChange(page)"
          v-for="page in pagination(currentPage, totalPages)"
          :key="page">
        <span
            :aria-current="page === currentPage ? 'page' : null"
            :class="page === currentPage ? 'bg-blue-50 text-blue-600' : 'bg-white'"
            class="flex items-center justify-center px-4 h-10 leading-tight bg-white border border-gray-300
            hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer">{{page}}</span>
      </li>
      <li
          @click="handlePageChange(currentPage + 1)"
          v-if="currentPage < totalPages">
        <span class="flex items-center justify-center px-4 h-10 leading-tight border border-gray-300
              rounded-e-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer">Next</span>
      </li>
    </ul>
  </div>
</template>
