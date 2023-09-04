import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAuth, LoginBody } from '../models/login-auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl: String = 'http://localhost:3000'

  login(body: LoginBody) : Observable<LoginAuth> {
    return this.http.post<LoginAuth>(`${this.baseUrl}/user/login`, body)
  }
}
