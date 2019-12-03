import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8080/users';

  public findAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }


}