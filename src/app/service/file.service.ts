import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FileService {

  private filesUrl = 'http://localhost:8080/files';

  constructor(private http: HttpClient) { }

  public uploadFileToApplication(file: any, id: number): Observable<String>{
      return this.http.post<String>(this.filesUrl + "/upload/application/" + id, file);
  }

}