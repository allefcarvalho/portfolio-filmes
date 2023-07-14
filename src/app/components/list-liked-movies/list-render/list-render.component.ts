import { Component } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { AuthService } from 'src/app/auth/auth.service';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  movie?: Movie[];
  constructor(
    private movieService: MovieService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.login();
    this.movieService
      .getListLikedMovies()
      .subscribe(
        {
          next: (item) => {
            this.movie = item
          },
          error: (erro) => {
            console.log(erro)
          }
        }
      );
  }

  login(): void {
    this.authService.login('Admin', 'admin');
  }
}
