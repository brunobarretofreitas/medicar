import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}
}
