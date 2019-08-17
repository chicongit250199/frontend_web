import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService {
  _URL = `${this.API_URL}/user`;

  constructor(
    private http: HttpClient
  ) {
    super();
  }
}
