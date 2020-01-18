import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitDTO } from '../model/visit.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VisitService {

    private visitUrl = 'http://localhost:8080/visits';

    constructor(private http: HttpClient) { }

    public findAllVisit(): Observable<VisitDTO[]> {
        return this.http.get<VisitDTO[]>(this.visitUrl);
    }

    public alterVisitToTaken(username: string, id: number): Observable<VisitDTO> {
        return this.http.put<VisitDTO>(this.visitUrl + "/alter/" + username + "/" + id, null);
    }

    public findVisitsByUser(username: string): Observable<VisitDTO[]> {
        return this.http.get<VisitDTO[]>(this.visitUrl + "/" + username);
    }
    

}