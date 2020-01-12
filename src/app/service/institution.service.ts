import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { InstitutionDTO } from '../institution/institution.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InstitutionService {

  private institutionIdSource = new BehaviorSubject<number>(-1);
  currentInstitutionId = this.institutionIdSource.asObservable();

  private institutionUrl = 'http://localhost:8080/institutions';

  constructor(private http: HttpClient) { }

  public changeInstitutionId(id: number) {
    this.institutionIdSource.next(id);
  }

  public findInstitutions(): Observable<InstitutionDTO[]> {
    return this.http.get<InstitutionDTO[]>(this.institutionUrl);
  }

  public findInstitutionById(id: number): Observable<InstitutionDTO> {
    return this.http.get<InstitutionDTO>(this.institutionUrl + "/" + id);
  }

}