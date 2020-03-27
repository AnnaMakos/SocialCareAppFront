import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../model/user.model';
import { UserService } from '../service/user.service';
import { ApplicationFormService } from '../service/application.form.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  currentUser: UserDTO;
  institutionName: string;

  constructor(private userService: UserService,
    private applicationFormService: ApplicationFormService,
    private snackBar: MatSnackBar) { }

  applicationStatus: string = 'SEND';
  maritalStatus: string;
  citizenship: string;
  phone: string;
  comments: string = '';
  username: string ="anja";
  childNumber: number;

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getCurrentUser().subscribe(user =>
      this.currentUser = user)

  }

  addForm() {
    console.log("phone " + this.phone);
    console.log("comments " + this.comments);
    console.log("maritals " + this.maritalStatus);
    console.log("number " + this.childNumber);

    this.applicationFormService.addApplicationForm(
      this.applicationStatus,
      this.maritalStatus,
      this.citizenship,
      this.phone,
      this.comments,
      this.username
    ).subscribe(data => {
this.openSnackBar("Wniosek został wysłany", "OK");
    }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}
