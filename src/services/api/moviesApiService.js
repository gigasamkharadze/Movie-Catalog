import {API_KEY} from "../../../config.js";

class MoviesApiService {
  baseUrl = 'https://api.themoviedb.org/3';
  config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${API_KEY}`
    }
  };

  constructor(resource='') {
    this.resource = resource;
  }

  getUrl(query='') {
    if (query) {
      return `${this.baseUrl}/${this.resource}?${query}&api_key=${API_KEY}`;
    }
    return `${this.baseUrl}/${this.resource}?api_key=${API_KEY}`;
  }

  async fetch(query) {
    try {
        const response = await fetch(this.getUrl(query), this.config);
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