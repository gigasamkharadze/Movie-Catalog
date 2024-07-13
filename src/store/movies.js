import {defineStore} from "pinia";
import {useLocalStorage} from "@vueuse/core";
import MoviesApiService from './../services/api/moviesApiService.js';

const moviesApiService = new MoviesApiService('discover/movie');

export const useMoviesStore = defineStore({
    id: 'movies',
    state: () => ({
        movies: [],
        favorites: useLocalStorage('favorites', []),
        cache: {},
    }),
    actions: {
        async getMovies(page = 1) {
            if (this.cache[page]) {
                this.movies = this.cache[page];
            } else {
                const data = await moviesApiService.getPage(page)
                this.cache[page] = data.results;
                this.movies = data.results;
            }
        },
        async getMoviesByTitle(title, page = 1) {
            const data = await moviesApiService.getByTitle(title, page);
            this.movies = data.results;
        },
        addToFavorites(movie) {
            if (!this.favorites.value.find(favorite => favorite.id === movie.id)) {
                this.favorites.value.push(movie);
            }
        },
        removeFromFavorites(movie) {
            this.favorites.value = this.favorites.value.filter(favorite => favorite.id !== movie.id);
        }
    }
});