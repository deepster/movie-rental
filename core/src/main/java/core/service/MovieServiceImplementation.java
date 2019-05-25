package core.service;


import core.domain.Movie;
import core.repo.MovieDatabaseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImplementation implements MovieService {
    private static final Logger log = LoggerFactory.getLogger(MovieServiceImplementation.class);

    @Autowired
    private MovieDatabaseRepository movieRepository;

    @Override
    public List<Movie> getAllMovies() {
        log.trace("getAllStudents - called");

        List<Movie> result = movieRepository.findAll();

        log.trace("getAllStudents - result={}", result);

        return result;

    }

    @Override
    public Movie saveMovie(Movie movie) {
        log.trace("saveMovie - called");

        Movie savedMovie = movieRepository.save(movie);

        log.trace("saveMovie - result={}", savedMovie);

        return savedMovie;

    }

    @Override
    public Movie updateMovie(Long id, Movie convertDtoToModel) {
        return null;
    }

    @Override
    public void deleteMovie(Long id) {
        log.trace("deleteMovie - id={}", id);

        movieRepository.deleteById(id);

        log.trace("deleteMovie - method finished");
    }
}
