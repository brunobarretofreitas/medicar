import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import buildUrl from '../../shared/utils/url-builder';
import { LoginPayload, LoginResponse } from './login.type';

@Injectable()
export class LoginService {
  loginUrl: string = buildUrl('users/login');

  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<LoginResponse> {
    /**
     * Performs login action.
     *
     * Call the login endpoint from Medicar API
     *
     * @param {LoginPayload} payload Login payload
     *
     * @return {Observable<LoginResponse>}
     */
    return this.http.post<LoginResponse>(this.loginUrl, payload);
  }
}
