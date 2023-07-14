import { Component } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-render',
  templateUrl: './movies-render.component.html',
  styleUrls: ['./movies-render.component.scss']
})
export class MoviesRenderComponent {
  movie?: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe(
        {
          next: (item) => {
            this.movie = item.results
          },
          error: (erro) => {
            console.log(erro)
          }
        }
      );

  }

  setLikes(movie: Movie): void {
    movie.like = true;
    const index = this.movie?.findIndex((movieItem) => movieItem.id == movie.id);
    this.movie?.includes(movie, index);
    this.movieService.registerLikes(movie);
  }
}
