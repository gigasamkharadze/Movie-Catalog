import { defineComponent } from 'vue';

import Main from "../views/Main.vue";
import Favorites from "../views/Favorites.vue";
import Movie from "../views/Movie.vue";
import Account from "../views/Account.vue";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";


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
        path: '/account',
        name: 'account',
        component: Account,
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: PlaceHolderView
            },
            {
                path: 'login',
                name: 'login',
                component: LoginForm
            },
            {
                path: 'signup',
                name: 'signup',
                component: SignupForm
            }
            ]
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