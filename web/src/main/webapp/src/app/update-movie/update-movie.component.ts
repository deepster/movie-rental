import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../shared/Movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {


  @Input() movie: Movie;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  updateMovie(title: HTMLInputElement, genre: HTMLInputElement, year: HTMLInputElement, rating: HTMLInputElement) {
    this.movieService.updateMovie(this.movie.id.toString(), title.value, genre.value, year.value, rating.value);
  }

}
