import {Injectable} from '@angular/core';
import {Movie} from "./shared/Movie";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


export const movies: Movie[] =
  [
    {id: 1, title: 'Denis', genre: 'Action', rating: 10, year: 1998},
    {id: 2, title: 'Denis', genre: 'Action', rating: 10, year: 1998},
    {id: 3, title: 'Denis', genre: 'Action', rating: 10, year: 1998},
    {id: 4, title: 'Denis', genre: 'Action', rating: 10, year: 1998},
  ];


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieListUrl = 'http://localhost:8080/api/movies';
  private deleteMovieUrl = 'http://localhost:8080/api/movie/';
  private createMovieUrl = 'http://localhost:8080/api/movie';
  private updateMovieUrl = 'http://localhost:8080/api/movie/';

  constructor(private httpClient: HttpClient,) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.movieListUrl);
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(this.deleteMovieUrl.concat(id.toString()));
  }

  createMovie(title: String, genre: String, year: String, rating: String) {
    let body = {
      title, genre, year, rating
    };
    this.httpClient.post(this.createMovieUrl, body).subscribe();
  }

  updateMovie(id: String, title: String, genre: String, year: String, rating: String) {
    let body = {
      title, genre, year, rating
    };
    this.httpClient.put(this.updateMovieUrl.concat(id.toString()), body).subscribe();
  }


}
