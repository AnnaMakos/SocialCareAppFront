import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChildFormDTO } from '../model/child-form.model';
import { ApplicationFormDTO } from '../model/application-form.model';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ApplicationFormService {

    private applicationUrl = 'http://localhost:8080/applicationform/';

    constructor(private http: HttpClient) { }

    public addApplicationForm(
        applicationStatus: string,
        maritalStatus: string,
        citizenship: string,
        phone: string,
        comments: string,
        username: string
    ): Observable<ApplicationFormDTO> {

        const form = {
            applicationStatus: applicationStatus,
            maritalStatus: maritalStatus,
            citizenship: citizenship,
            phone: phone,
            comments: comments,
            username: username
        }
        
        return this.http.post<ApplicationFormDTO>(this.applicationUrl + 'addform', form);
    }

    public addChildForm(
        name: string,
        surname: string,
        pesel: string,
        citizenship,
        id: number
    ): Observable<ChildFormDTO> {

        const form = {
            name: name,
            surname: surname,
            pesel: pesel,
            citizenship: citizenship
        }

        return this.http.post<ChildFormDTO>(this.applicationUrl + "addchild/" + id, form);
    }

    public findAllApplicationsByUsername(username: string) : Observable<ApplicationFormDTO[]> {
        return this.http.get<ApplicationFormDTO[]>(this.applicationUrl + "show/" + username);
    }

}
