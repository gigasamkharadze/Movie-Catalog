<script setup>
import {useUsersStore} from "../store/users.js";
import {ref} from "vue";
import Success from "./toasts/Success.vue";
import Error from "./toasts/Error.vue";
import {useRouter} from "vue-router";

const userStore = useUsersStore();
const router = useRouter();
const success = ref(false);
const error = ref(false);

const email = ref("");
const password = ref("");

const handleLoginSubmit = () => {
  userStore.login(email.value, password.value);
  if (!userStore.error){
    success.value = true;
    setTimeout(() => {
      router.push({name:'login'});
    }, 1000);
  }else {
    error.value = true;
  }
};
</script>

<template>
  <div>
    <Success v-if="success" :message="'Your account has been created successfully!'"/>
    <Error v-if="error" :message="userStore.error"/>
    <form
        @submit.prevent="handleLoginSubmit"
        class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input v-model="email"
               type="email"
               autocomplete="email"
               id="email"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               placeholder="name@flowbite.com"
               required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
        <input v-model="password"
               type="password"
               autocomplete="current-password"
               id="password"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
               required />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember"
                 autocomplete="on"
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