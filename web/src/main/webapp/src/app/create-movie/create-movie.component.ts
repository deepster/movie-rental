import {Component, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  createMovie(title: HTMLInputElement, genre: HTMLInputElement, year: HTMLInputElement, rating: HTMLInputElement) {
    this.movieService.createMovie(title.value, genre.value, year.value, rating.value)
  }

}
