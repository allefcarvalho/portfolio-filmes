import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEST_API } from 'src/environments/environments';
import { Token } from './Token';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(usernam: string, password: string): Observable<Token> {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNjg5MzAzNjE4LCJleHAiOjE2ODkzOTAwMTh9.1qTXWjG9rla4dETUb-O__yPJfXCE8RbiYyZxYUo0GfE');
        return this.http.post<Token>(`${NEST_API}/auth/login`, { usernam, password });
    }
}
