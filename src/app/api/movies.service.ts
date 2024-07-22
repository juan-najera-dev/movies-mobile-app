import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  API_URL = 'https://www.omdbapi.com/?';
  API_KEY = 'GENERATE YOUR API KEY';

  constructor(public httpMovies: HttpClient) {}

  async getMediaDetails(imdbID: string) {
    const response = await fetch(
      `${this.API_URL}&i=${imdbID}&apikey=${this.API_KEY}`
    );
    const data = await response.json();
    //console.log('dataGetMovieDetails: ', data);
    return data;
  }

  async searchAll(searchText: string) {
    const response = await fetch(
      `${this.API_URL}s=${searchText}&apikey=${this.API_KEY}`
    );
    const data = await response.json();
    return data.Search;
  }

  async getMedia(searchText: string) {
    const movies = await this.searchAll(searchText);
    //console.log('movies response: ', movies);
    return movies;
  }

  async searchMovies(searchText: string) {
    const response = await fetch(
      `${this.API_URL}s=${searchText}&apikey=${this.API_KEY}&type=movie`
    );
    const data = await response.json();
    return data.Search;
  }

  async searchSeries(searchText: string) {
    const response = await fetch(
      `${this.API_URL}s=${searchText}&apikey=${this.API_KEY}&type=series`
    );
    const data = await response.json();
    return data.Search;
  }
}
