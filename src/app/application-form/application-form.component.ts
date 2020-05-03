import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../model/user.model';
import { UserService } from '../service/user.service';
import { ApplicationFormService } from '../service/application.form.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { ApplicationFormDTO } from '../model/application-form.model';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  currentUser: UserDTO;
  institutionName: string;
  childrenList = [];
  applicationStatus: string = 'SEND';
  maritalStatus: string;
  citizenship: string;
  phone: string;
  comments: string = '';
  username: string;
  numberOfChildren: number = 0;
  numberOfChildrenChosen: Promise<boolean>;
  currentUserLoaded: Promise<boolean>;
  currentFormId: number;
  currentForm: ApplicationFormDTO;

  childrenName = [];
  childrenSurname = [];
  childrenPesel = [];
  childrenCitizenship = [];

  constructor(private userService: UserService,
    private applicationFormService: ApplicationFormService,
    private snackBar: MatSnackBar) { }



  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.currentUserLoaded = Promise.resolve(true);
      this.username = user.username;
    }
    )

  }

  addForm() {
    this.applicationFormService.addApplicationForm(
      this.applicationStatus,
      this.maritalStatus,
      this.citizenship,
      this.phone,
      this.comments,
      this.username
    ).subscribe(data => {
      this.currentForm = data;
      this.currentFormId = this.currentForm.id;
      
      for (var i = 0; i < this.numberOfChildren; i++) {
        if(!this.childrenCitizenship[i]) {
          this.childrenCitizenship[i] = this.citizenship;
        }
        this.applicationFormService.addChildForm(
          this.childrenName[i],
          this.childrenSurname[i],
          this.childrenPesel[i],
          this.childrenCitizenship[i],
          this.currentFormId
        ).subscribe()
      }
      this.openSnackBar("Wniosek został wysłany", "OK");
    }
    )
  }

  setChildrenNumber(childNum: number) {
    this.numberOfChildren = childNum;

    for (var i = 0; i < this.numberOfChildren; i++) {
      this.childrenList[i] = i;
    }
    this.numberOfChildrenChosen = Promise.resolve(true);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}
