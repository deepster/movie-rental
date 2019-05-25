import {Injectable} from '@angular/core';
import {Movie} from "./shared/Movie";

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

  getMovies(): Movie[] {
    return movies
  }

  constructor() {
  }
}
