import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../service/application.service';
import { FileService } from '../service/file.service';
import { ApplicationAddDTO } from '../model/application.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-application-add',
  templateUrl: './application-add.component.html',
  styleUrls: ['./application-add.component.scss']
})
export class ApplicationAddComponent implements OnInit {

  name: string;
  path = "";
  application: ApplicationAddDTO;
  file: File = null;
  form: FormGroup;
  

  constructor(private applicationService: ApplicationService,
    private fileService: FileService, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }

  uploadFile(id: number) {
    let body = new FormData();
    body.append("file", this.file);
    this.fileService.uploadFileToApplication(body, id).subscribe(
      (data) => {
      console.log("file uploaded");
      this.openSnackBar("Wniosek dodany.", "OK");
      },
      error => this.openSnackBar("Wniosek dodany.", "OK"),
      () => console.log("completed"))
  }

  addApplication() {
    this.application = {
      name: this.name,
      path: this.path
    }

    this.applicationService.addApplication(this.application).subscribe(application => {
      this.uploadFile(application.id)
      });
    

  }

  createForm() {
    this.form = this.formBuilder.group({
      file_upload: null
    });
  }

  fileChange(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}
