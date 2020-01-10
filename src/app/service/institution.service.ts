import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstitutionDTO} from '../institution/institution.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InstitutionService {

  constructor(private http: HttpClient) {}

  private institutionUrl = 'http://localhost:8080/institutions';


  public findInstitutions(): Observable<InstitutionDTO[]>{
      return this.http.get<InstitutionDTO[]>(this.institutionUrl);
  }

}