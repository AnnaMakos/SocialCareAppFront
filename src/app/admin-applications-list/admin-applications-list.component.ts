import { Component, OnInit } from '@angular/core';
import { ApplicationFormService } from '../service/application.form.service';
import { ApplicationFormDTO } from '../model/application-form.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-applications-list',
  templateUrl: './admin-applications-list.component.html',
  styleUrls: ['./admin-applications-list.component.scss']
})
export class AdminApplicationsListComponent implements OnInit {

  displayedColumns = ['formId', 'user', 'status', 'official', 'addOfficial', 'notes'];
  forms = new MatTableDataSource<ApplicationFormDTO>();

  constructor(private applicationFormService: ApplicationFormService) { }

  ngOnInit() {
    this.refresh();
  }

  public selectForm(id: number) {
    this.applicationFormService.currentFormId = id;
    console.log("funkcja w komponencie + id wniosku " + id);
  }

  refresh() {
    this.applicationFormService.findAll().subscribe(forms => {
      this.forms.data = forms;
    })
  }



}
