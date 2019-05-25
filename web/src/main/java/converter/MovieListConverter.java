package converter;

import core.domain.Movie;
import dto.MovieDto;
import dto.MovieListDto;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class MovieListConverter {

    public MovieListDto convertModelToDto(List<Movie> movies) {
        MovieListDto mlDto = new MovieListDto();
        List<MovieDto> moviesDto = new LinkedList<>();
        for (Movie movie : movies) {
            MovieDto dto = MovieDto.builder()
                    .title(movie.getTitle())
                    .genre(movie.getGenre())
                    .year(movie.getYear())
                    .rating(movie.getRating())
                    .build();
            dto.setId(movie.getId());
            moviesDto.add(dto);
        }
        mlDto.setMovies(moviesDto);
        return mlDto;
    }
}
