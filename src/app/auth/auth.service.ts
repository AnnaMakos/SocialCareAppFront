import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  myUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { username: username, password: password };
    return this.http.post<any>(this.myUrl + 'signin', credentials);
  }

  register(name: string,
    surname: string,
    username: string,
    email: string,
    pesel: string,
    street: string,
    streetNumber: string,
    localNumber: string,
    postcode: string,
    city: string,
    password: string,
    roles: string[]): Observable<any> {

    const form =
    {
      name: name,
      surname: surname,
      username: username,
      email: email,
      pesel: pesel,
      street: street,
      streetNumber: streetNumber,
      localNumber: localNumber,
      postcode: postcode,
      city: city,
      password: password,
      roles: roles
    }
    const options = {
      responseType: 'text' as 'json'
    }
    return this.http.post<any>(this.myUrl + 'signup', form, options);
  }

}