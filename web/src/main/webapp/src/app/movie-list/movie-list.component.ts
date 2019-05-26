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
  selectedMovie: Movie;

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movieList = movies['movies'];
    });
  }

  deleteMovie(movie: Movie) {
    if (this.selectedMovie === movie) {
      this.movieService.deleteMovie(movie.id).subscribe();
    } else {
      this.selectedMovie = movie;
    }
  }

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();

  }

}
