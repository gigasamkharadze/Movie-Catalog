import Main from "../views/Main.vue";
import { defineComponent } from 'vue';
import Favorites from "../views/Favorites.vue";
import Movie from "../views/Movie.vue";


const PlaceHolderView = defineComponent({});

export default [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/movie/:id',
        name: 'movie-details',
        component: Movie,
        props: true
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: Favorites
    },
    {
        path: '/tv',
        name: 'tv',
        component: PlaceHolderView
    },
    {
        path: '/account',
        name: 'account',
        component: PlaceHolderView
    },
    {
        path: '/help',
        name: 'help',
        component: PlaceHolderView
    },
    {
        path: '/settings',
        name: 'settings',
        component: PlaceHolderView
    }

]