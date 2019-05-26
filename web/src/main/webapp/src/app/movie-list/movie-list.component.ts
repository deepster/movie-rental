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

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movieList = movies['movies'];
    });
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe();

  }

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();

  }

}
