import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEST_API } from 'src/environments/environments';
import { Token } from './Token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const headers = {
            'Content-Type': 'application/json'
        };
        const body = {
            "username": username,
            "password": password
        };
        const a = this.http.post<Token>(`${NEST_API}/auth/login`, body, { headers })
            .subscribe(item => {
                localStorage.setItem('token', item.access_token);
            }
            );

    }
}
