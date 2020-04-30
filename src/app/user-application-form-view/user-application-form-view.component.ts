import { Component, OnInit } from '@angular/core';
import { ApplicationFormDTO } from '../model/application-form.model';
import { ApplicationFormService } from '../service/application.form.service';
import { ChildFormDTO } from '../model/child-form.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-application-form-view',
  templateUrl: './user-application-form-view.component.html',
  styleUrls: ['./user-application-form-view.component.scss']
})
export class UserApplicationFormViewComponent implements OnInit {

  form: ApplicationFormDTO;
  currentFormLoaded: Promise<boolean>;
  children = new MatTableDataSource<ChildFormDTO>();
  displayedColumns = ["name", "surname", "pesel", "citizenship"];

  constructor(private applicationFormService: ApplicationFormService) { }

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

}
