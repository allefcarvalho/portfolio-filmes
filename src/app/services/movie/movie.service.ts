import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, NEST_API, TMDB_API } from 'src/environments/environments';
import { Movie } from 'src/app/Movie';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Response<Movie[]>> {
    return this.http.get<Response<Movie[]>>(`${TMDB_API}/popular?page=1&region=BR`, { params: { api_key: API_KEY } });
  }

  registerLikes(movie: Movie) {
    const headers = {'Content-Type': 'application/json' };
    this.http.post<any>(`${NEST_API}/movies/addlikes`, movie, { headers })
      .subscribe();
  }
}
