<script setup>
import {useUsersStore} from "../store/users.js";
import {computed} from "vue";
import {useRouter} from "vue-router";
import UserAccount from "../components/UserAccount.vue";

const usersStore = useUsersStore();
const user = computed(() => usersStore.user);

const router = useRouter();
const currentRouteName = computed(() => router.currentRoute.value.name);


</script>

<template>
  <div>
    <div v-if="user">
      <UserAccount :user="user"/>
    </div>
    <div v-else>
      <div class="w-fit mx-auto mt-4 text-center text-gray-500 border-b">
        <div class="flex flex-wrap -mb-px">
          <router-link :to="{name: 'login'}" class="me-2">
            <span
                :class="{'text-blue-500 border-blue-500': currentRouteName === 'login'}"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:cursor-pointer">
              Log in </span>
          </router-link>
          <router-link :to="{name: 'signup'}" class="me-2">
            <span
                :class="{'text-blue-500 border-blue-500': currentRouteName === 'signup'}"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:cursor-pointer">
              Sing up</span>
          </router-link>
        </div>
      </div>
      <div class="w-1/2 mx-auto mt-16">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>