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
  displayedColumns = ["name"];//, "status", "show"];
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

  findUsersApplications(username: string){
    this.applicationFormService.findAllApplicationsByUsername(username).subscribe(data => {
      this.applications.data = data;
      console.log("application.data >>> " + this.applications.data[0].citizenship);
      console.log("apps >>> " + data[0].citizenship);
  
    },
    error => {
      console.log("errrrrorrrrrrr +>>>" + error);
    })
  }

}
