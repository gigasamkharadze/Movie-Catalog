<script setup>

import {ref} from "vue";

const email = ref("");
const password = ref("");
const repeatPassword = ref("");

const handleSignupSubmit = () => {
  // signup logic here
};

</script>

<template>
  <div>
    <form @submit.prevent="handleSignupSubmit"
        class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input v-model="email"
               name="email"
               type="email"
               id="email"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               placeholder="name@flowbite.com"
               required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
        <input v-model="password"
               name="password"
               type="password"
               id="password"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               required />
      </div>
      <div class="mb-5">
        <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
        <input v-model="repeatPassword"
               name="repeatPassword"
               type="password"
               id="repeat-password"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               required />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50"/>
        </div>
        <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the
          <span class="text-blue-600 hover:underline">terms and conditions</span></label>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center">
        Register new account
      </button>
    </form>
  </div>
</template>
