import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  currentUser: UserDTO;
  institutionName: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.userService.getCurrentUser().subscribe(user =>
      this.currentUser = user)
  }

}
