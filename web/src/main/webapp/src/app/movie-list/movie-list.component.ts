import {Component, OnInit} from '@angular/core';
import {Movie} from "../shared/Movie";
import {MovieService} from "../movie.service";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[];

  movieListURL = "http://localhost:8080/api/movies";

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieList = this.movieService.getMovies();
  }

}
