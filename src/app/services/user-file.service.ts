import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFileService extends AbstractService  {

  _URL = `${this.API_URL}/user-file`;

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getFile(fileId) {}

  uploadFile(formData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(this._URL, formData, { headers });
  }
}
