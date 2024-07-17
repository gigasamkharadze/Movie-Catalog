<script setup>

import {useUsersStore} from "../store/users.js";
import {ref} from "vue";

const usersStore = useUsersStore();

const email = ref("");
const password = ref("");

const handleLoginSubmit = () => {
//   login logic here
};

</script>

<template>
  <div>
    <form
        @submit.prevent="handleLoginSubmit"
        class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input v-model="email"
               type="email"
               id="email"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               placeholder="name@flowbite.com"
               required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
        <input v-model="password"
               type="password"
               id="password"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               required />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember"
                 type="checkbox"
                 value=""
                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50"/>
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
      </div>
      <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">
        Submit</button>
    </form>
  </div>
</template>