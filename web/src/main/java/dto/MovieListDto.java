package dto;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class MovieListDto extends BaseDto {
    private List<MovieDto> movies;
}
