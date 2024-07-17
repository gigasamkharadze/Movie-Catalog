class MoviesApiService {
  baseUrl = 'https://api.themoviedb.org/3';
  API_KEY = import.meta.env.VITE_API_KEY;
  config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.API_KEY}`
    }
  };

  constructor(resource='') {
    this.resource = resource;
  }

  async getPage(page = 1) {
    try {
        const url = `${this.baseUrl}/${this.resource}?page=${page}&api_key=${this.API_KEY}`;
        const response = await fetch(url, this.config);
        return await response.json();
    } catch (error) {
        this.handleError(error);
    }
  }

  async getByTitle(title, page = 1) {
    try {
        if (title === "") {
            return await this.getPage(page)
        }
        else {
            const url = `${this.baseUrl}/search/movie?query=${title}&page=${page}&api_key=${this.API_KEY}`;
            const response = await fetch(url, this.config);
            return await response.json();
        }
    } catch (error) {
        this.handleError(error);
    }
  }

  async getMovieById(id) {
    try {
        const url = `${this.baseUrl}/movie/${id}?api_key=${this.API_KEY}`;
        const response = await fetch(url, this.config);
        return await response.json();
    } catch (error) {
        this.handleError(error);
    }
  }

  async getMovieImages(id) {
    try {
        const url = `${this.baseUrl}/movie/${id}/images?api_key=${this.API_KEY}`;
        const response = await fetch(url, this.config);
        return await response.json();
    } catch (error) {
        this.handleError(error);
    }
  }

  async getSimilarMovies(id){
      try {
          const url = `${this.baseUrl}/movie/${id}/similar?api_key=${this.API_KEY}`;
          const response = await fetch(url, this.config);
          return await response.json();
      } catch (error) {
            this.handleError(error);
      }
  }
  async getGenres(){
        try {
            const url = `${this.baseUrl}/genre/movie/list?api_key=${this.API_KEY}`;
            const response = await fetch(url, this.config);
            return await response.json();
        } catch (error) {
                this.handleError(error);
        }
  }
  async getMoviesByGenre(genreId, page = 1){
      try {
          const url = `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.API_KEY}`;
          const response = await fetch(url, this.config);
          return await response.json();
      } catch (error) {
          this.handleError(error);
      }
  }
  handleError(error) {
      console.error('Error:', error);
  }
}

export default MoviesApiService;