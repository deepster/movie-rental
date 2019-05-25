package core.service;

import core.domain.Movie;

import java.util.List;


public interface MovieService {

    List<Movie> getAllMovies();

    Movie saveMovie(Movie movie);

    Movie updateMovie(Long id, Movie convertDtoToModel);

    void deleteMovie(Long id);
}
