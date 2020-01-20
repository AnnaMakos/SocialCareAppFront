import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../service/application.service';
import { MatTableDataSource } from '@angular/material';
import { ApplicationDTO } from '../model/application.model';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  applications = new MatTableDataSource<ApplicationDTO>();
  displayedColumns = ['id', 'name', 'path']

  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.applicationService.findAllApplications().subscribe(applications => {
      this.applications.data = applications
    })
  }

}
