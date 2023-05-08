import { Injectable } from '@angular/core';
import { Auth, AuthToken } from '../interfaces/auth';
import {Observable, tap} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {UserService} from "../../user/services/user.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private userService: UserService) {}

  login(credentials: Auth): Observable<AuthToken> {
    return this.httpClient
      .post<AuthToken>(`${environment.apiUrl}/login`, credentials).pipe(tap(data => {
        const token = data.token;
        this.userService.saveToken(token);
      }))
  }


}
