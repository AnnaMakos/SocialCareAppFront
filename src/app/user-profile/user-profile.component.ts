import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material';
import { UserDTO } from '../user/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: UserDTO;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.userService.getCurrentUser().subscribe(user =>
      this.currentUser = user)
  }

}
