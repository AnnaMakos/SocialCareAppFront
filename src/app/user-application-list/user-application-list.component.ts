import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApplicationFormDTO } from '../model/application-form.model';
import { UserDTO } from '../model/user.model';
import { UserService } from '../service/user.service';
import { ApplicationFormService } from '../service/application.form.service';
import { ApplicationService } from '../service/application.service';

@Component({
  selector: 'app-user-application-list',
  templateUrl: './user-application-list.component.html',
  styleUrls: ['./user-application-list.component.scss']
})
export class UserApplicationListComponent implements OnInit {

  applications = new MatTableDataSource<ApplicationFormDTO>();
  displayedColumns = ["status", "official", "name", "button"];
  currentUser: UserDTO;
  currentUserLoaded: Promise<boolean>;
  


  constructor(
    private userService: UserService,
    private applicationFormService: ApplicationFormService,
    private applicationService: ApplicationService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      console.log("username: " + user.username);
      this.currentUserLoaded = Promise.resolve(true);
      this.findUsersApplications(user.username);
      console.log("wnioski >>> " + this.applications.data);
    })
  }
  
  public selectForm(id: number) {
    this.applicationFormService.currentFormId = id;
  }

  findUsersApplications(username: string){
    this.applicationFormService.findAllByApplicantUsername(username).subscribe(data => {
      this.applications.data = data;  
    },
    error => {
      console.log("errrrrorrrrrrr +>>>" + error);
    })
  }

}
