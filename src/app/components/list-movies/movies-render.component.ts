import { Component } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-render',
  templateUrl: './movies-render.component.html',
  styleUrls: ['./movies-render.component.scss']
})
export class MoviesRenderComponent {
  movies?: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe(
        {
          next: (item) => {
            this.movies = item.results
          },
          error: (erro) => {
            console.log(erro)
          }
        }
      );

  }

  setLikes(movie: Movie): void {
    movie.like = true;
    const index = this.movies?.findIndex((movieItem) => movieItem.id == movie.id);
    this.movies?.includes(movie, index);
    this.movieService.registerLikes(movie);
  }
}
