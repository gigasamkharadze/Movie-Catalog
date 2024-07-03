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

    handleError(error) {
        console.error('Error:', error);
    }
}

export default MoviesApiService;