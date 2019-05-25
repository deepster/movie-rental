import {Component, OnInit} from '@angular/core';
import {Movie} from "../shared/Movie";

export const movies: Movie[] =
  [
    {id : 1 ,title : 'Denis', genre : 'Action', rating : 10, year : 1998},
    {id : 2 ,title : 'Denis', genre : 'Action', rating : 10, year : 1998},
    {id : 3 ,title : 'Denis', genre : 'Action', rating : 10, year : 1998},
    {id : 4 ,title : 'Denis', genre : 'Action', rating : 10, year : 1998},
  ];

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesList = movies;

  movieListURL = "http://localhost:8080/api/movies";

  constructor() {
  }

  ngOnInit() {
  }

}
