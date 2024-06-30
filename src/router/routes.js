import Main from "../views/Main.vue";

export default [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/movie/:id',
        name: 'movie',
        component: () => import(/* webpackChunkName: "movie" */ '../views/Movie.vue')
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
    }
]