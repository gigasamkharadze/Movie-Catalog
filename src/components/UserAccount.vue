<script setup>
import {useRouter} from "vue-router";
import {useUsersStore} from "../store/users.js";

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const router = useRouter();
const userStore = useUsersStore();

const handleLogout = () => {
  userStore.logout();
  router.push({name: 'login'});
}

</script>

<template>
  <div class="flex mt-16 h-screen w-full justify-center">
    <div class="max-w-md">
      <div class="bg-white rounded-lg p-4">
        <div class="photo-wrapper">
          <img class="w-40 h-40 rounded-full mx-auto"
               src="/user-image.png"
               alt="John Doe">
        </div>
        <div class="text-center mt-4">
          <h3 class="text-xl text-gray-900 font-medium leading-8">Giga Samkharadze</h3>
          <div class="text-gray-400 text-sm font-semibold">
            <p>Software Engineer</p>
          </div>
          <table class="text-sm my-3 mx-auto">
            <tbody>
            <tr>
              <td class="px-2 py-1 text-gray-500 font-semibold">Address</td>
              <td class="px-2 py-1">Tbilisi, Georgia</td>
            </tr>
            <tr>
              <td class="px-2 py-1 text-gray-500 font-semibold">Phone</td>
              <td class="px-2 py-1">+995 598 19 00 84</td>
            </tr>
            <tr>
              <td class="px-2 py-1 text-gray-500 font-semibold">Email</td>
              <td class="px-2 py-1">{{ props.user.email }}</td>
            </tr>
            </tbody>
          </table>
          <div class="text-center mt-3">
            <router-link :to="{name: 'favorites'}" class="text-xs text-indigo-500 italic hover:underline
            hover:text-indigo-600 font-medium">View favorites</router-link>
          </div>
          <button
              @click="handleLogout"
              class="mt-8 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg">
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
