import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(): User {
    const token = localStorage.getItem('medicar@token');

    return {
      name: 'Bruno Barreto',
    };
  }
}
