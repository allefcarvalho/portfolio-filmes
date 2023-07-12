import { Component } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  
  movie?: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe(
        {
          next: (item) => {
            this.movie = item.results
            console.log(this.movie)
          },
          error: (erro) => {
            console.log(erro)
          }
        }
      );

  }

}
