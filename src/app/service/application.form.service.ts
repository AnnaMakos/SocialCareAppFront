import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    ): Observable<any> {

        const form = {
            applicationStatus: applicationStatus,
            maritalStatus: maritalStatus,
            citizenship: citizenship,
            phone: phone,
            comments: comments,
            username: username
        }

        const options = {
            responseType: 'text' as 'json'
        }
        return this.http.post<any>(this.applicationUrl + 'addform', form, options);
    }

}
