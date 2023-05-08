import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {User} from "../interfaces/user";
import {BehaviorSubject, Observable} from "rxjs";
import {TokenService} from "../../auth/services/token/token.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});
  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeToken();
    }
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  decodeToken(): void {
    const token = this.tokenService.getToken()
    const decoded = jwt_decode(token) as {};
    const user = decoded['user'] as User;
    this.userSubject.next(user);
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeToken();

  }
}
