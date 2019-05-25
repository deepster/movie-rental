import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieListURL = "http://localhost:8080/api/movies";

  movies = [];

  constructor() { }

  ngOnInit() {
  }

}
