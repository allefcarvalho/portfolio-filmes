import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, NEST_API, TMDB_API } from 'src/environments/environments';
import { Movie } from 'src/app/Movie';
import { Observable } from 'rxjs';
import { Response } from 'src/app/Response';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService { 

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }  

  getMovies(): Observable<Response<Movie[]>> {
    return this.http.get<Response<Movie[]>>(`${TMDB_API}/popular?page=1&region=BR`, { params: { api_key: API_KEY } });
  }

  getListLikedMovies(): Observable<Movie[]> {
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get<Movie[]>(`${NEST_API}/movies`, { headers });
  }

  registerLikes(movie: Movie) {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    };
    this.http.post<any>(`${NEST_API}/movies/addlikes`, movie, { headers })
      .subscribe();
  }
}
