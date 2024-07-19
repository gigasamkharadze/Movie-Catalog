<template>
    <nav class="fixed inset-y-0 h-full left-0 w-60 shadow-lg bg-white z-10">
        <div class="flex flex-col h-full py-6">
            <div class="flex gap-2 mb-10 text-3xl px-8">
                <img src="/watching.png" alt="icon-film" class="w-8 aspect-square animate-bounce"/>
                <router-link to="/" class="">Film</router-link>
            </div>
          <router-link to="/"
                       class="flex w-full items-center py-2 gap-3 px-8 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <img src="/movie.png" alt="movie icon" class="w-6 h-6">
            <span>Movies</span>
          </router-link>
          <router-link to="/favorites"
                       class="flex w-full items-center py-2 gap-3 px-8 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <img src="/favorite.png" alt="favorite icon" class="w-6 h-6">
            <span>Favorites</span>
          </router-link>
          <hr class="w-full border border-gray-300 my-4"/>
          <router-link to="/account"
                       class="flex w-full items-center py-2 gap-3 px-8 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <img src="/account.png" alt="account icon" class="w-6 h-6">
            <span>Account</span>
          </router-link>
          <router-link to="/help"
                       class="flex w-full items-center py-2 gap-3 px-8 hover:bg-gradient-to-r from-gray-100 to-gray-200">
            <img src="/help.png" alt="help icon" class="w-6 h-6">
            <span>Help</span>
          </router-link>
        </div>
    </nav>
</template>