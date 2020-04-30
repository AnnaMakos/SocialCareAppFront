import { Component, OnInit } from '@angular/core';
import { ApplicationFormService } from '../service/application.form.service';
import { ApplicationFormDTO } from '../model/application-form.model';
import { MatTableDataSource } from '@angular/material';
import { ChildFormDTO } from '../model/child-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form-view',
  templateUrl: './application-form-view.component.html',
  styleUrls: ['./application-form-view.component.scss']
})
export class ApplicationFormViewComponent implements OnInit {

  form: ApplicationFormDTO;
  currentFormLoaded: Promise<boolean>;
  children = new MatTableDataSource<ChildFormDTO>();
  displayedColumns = ["name", "surname", "pesel", "citizenship"];
  applicationStatus: string;

  constructor(private applicationFormService: ApplicationFormService,
    private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.applicationFormService.findById(this.applicationFormService.currentFormId).subscribe(form => {
      this.currentFormLoaded = Promise.resolve(true);
      this.form = form;
      this.children.data = form.children;
    })
  }

  alterApplicationStatus(status: string, id: number) {
    this.applicationFormService.alterApplicationStatus(status, id).subscribe(form => {
      console.log("zmieniono status");
      this.router.navigate(['./officialpanel/applications']);
    })
  }

}
