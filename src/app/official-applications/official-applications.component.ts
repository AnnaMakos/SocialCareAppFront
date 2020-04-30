import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserDTO } from '../model/user.model';
import { UserService } from '../service/user.service';
import { ApplicationFormService } from '../service/application.form.service';
import { ApplicationService } from '../service/application.service';
import { ApplicationFormDTO } from '../model/application-form.model';

@Component({
  selector: 'app-official-applications',
  templateUrl: './official-applications.component.html',
  styleUrls: ['./official-applications.component.scss']
})
export class OfficialApplicationsComponent implements OnInit {

  applications = new MatTableDataSource<ApplicationFormDTO>();
  displayedColumns = ["status", "name", "citizenship", "button"];
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
      this.currentUserLoaded = Promise.resolve(true);
      this.findUsersApplications(user.username);
    })
  }

  public selectForm(id: number) {
    this.applicationFormService.currentFormId = id;
  }

  findUsersApplications(username: string){
    this.applicationFormService.findAllByOfficialUsername(username).subscribe(data => {
      this.applications.data = data;
      console.log("application.data >>> " + this.applications.data[0].citizenship);
      console.log("apps >>> " + data[0].citizenship);
  
    },
    error => {
      console.log("errrrrorrrrrrr +>>>" + error);
    })
  }

}
