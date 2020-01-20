import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApplicationDTO, ApplicationAddDTO } from '../model/application.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApplicationService {

  private applicationUrl = 'http://localhost:8080/application';

  constructor(private http: HttpClient) { }

  public findAllApplications(): Observable<ApplicationDTO[]> {
      return this.http.get<ApplicationDTO[]>(this.applicationUrl + "/show");
  }

  public addApplication(application: ApplicationAddDTO): Observable<ApplicationDTO> {
      return this.http.post<ApplicationDTO>(this.applicationUrl + "/add", application);
  }

}