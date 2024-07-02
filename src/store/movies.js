import {defineStore} from "pinia";
import MoviesApiService from './../services/api/moviesApiService.js';

const moviesApiService = new MoviesApiService('discover/movie');

export const useMoviesStore = defineStore({
    id: 'movies',
    state: () => ({
        movies: [],
        cache: {},
    }),
    actions: {
        async getMovies(page = 1) {
            if (this.cache[page]) {
                this.movies = this.cache[page];
            } else {
                const data = await moviesApiService.fetch('page=1')
                this.movies = data.results;
            }
        },
    }
});