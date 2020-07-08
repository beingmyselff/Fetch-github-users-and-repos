import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrl = 'https://api.github.com/users';

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) { }

  // return what comes back from this http call
  // to fetch users list
  // limited to 10 here
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}?per_page=10`);
  }

  // return what comes back from this http call
  // to fetch partcular repo's list
  // limited to 10 here
  getUserRepo(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl + '/' + username + '/repos'}?per_page=10`);
  }
}
