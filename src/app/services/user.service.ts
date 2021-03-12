import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl = "http://localhost:3000/api/user/";
  constructor(private http: HttpClient) { }

  public authenticate(username, password): Observable<any> {
    return this.http.post(this.baseUrl + 'authentication', {
      email: username,
      password: password
    });
  }
  public register(user: User): Observable<any> {
    return this.http.post(this.baseUrl + 'register', user);
  }
  public getUser(id: String): Observable<any> {
    return this.http.get(this.baseUrl + 'get/' + id);
  }
}
