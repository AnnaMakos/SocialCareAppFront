import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../service/user.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['username', 'name', 'surname', 'email', 'roles', 'addRole'];
  users = new MatTableDataSource<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(users => {
      this.users.data = users;
    })
  }

}
