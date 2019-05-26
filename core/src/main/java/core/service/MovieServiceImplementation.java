package core.service;


import core.domain.Movie;
import core.repo.MovieDatabaseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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

    @Transactional
    @Override
    public Movie updateMovie(Long id, Movie movie) {

        Optional<Movie> savedMovie = movieRepository.findById(id);
        if (savedMovie.isPresent()) {
            savedMovie.get().setTitle(movie.getTitle());
            savedMovie.get().setGenre(movie.getGenre());
            savedMovie.get().setYear(movie.getYear());
            savedMovie.get().setRating(movie.getRating());
            return savedMovie.get();
        }
        if (movie != null) {
            movieRepository.save(movie);
            return movie;
        }
        return null;

    }


    @Override
    public void deleteMovie(Long id) {
        log.trace("deleteMovie - id={}", id);

        movieRepository.deleteById(id);

        log.trace("deleteMovie - method finished");
    }
}
