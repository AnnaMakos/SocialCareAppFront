import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User, UserDTO, UserBasicDTO } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/users';
  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  constructor(private http: HttpClient) { }

  public changeUsername(username: string) {
    this.usernameSource.next(username);
  }

  public findAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.userUrl);
  }

  public findUserByUsername(username: string): Observable<UserDTO> {
    return
  }

  public alterUserRole(username: string, rolename: string): Observable<UserDTO> {
    return this.http.put<UserDTO>(this.userUrl + "/alterrole/" + username + "/" + rolename, null);
  }

  public findOfficials(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.userUrl + "/officials");
  }

  public alterUserInstitution(username: string, institutionId: number): Observable<UserDTO> {
    return this.http.put<UserDTO>(this.userUrl + "/alterinstitution/" + username + "/" + institutionId, null);
  }

  public findOfficialsByInstitution(institutionId: number): Observable<UserBasicDTO[]> {
    return this.http.get<UserBasicDTO[]>(this.userUrl + "/officials/institution/" + institutionId);
  }

  public getCurrentUser(): Observable<UserDTO>{
    return this.http.get<UserDTO>(this.userUrl + "/current");
  }

}