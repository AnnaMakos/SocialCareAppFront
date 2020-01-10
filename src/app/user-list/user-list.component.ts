import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../user/user.model';
import { UserService } from '../service/user.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['username', 'name', 'surname', 'email', 'roles', 'addRole'];
  users = new MatTableDataSource<UserDTO>();

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.refresh()
  }

  alterUserRole(username: string, role: string){
    this.userService.alterUserRole(username, role).subscribe(
      data => {
        console.log("User altered");
        this.openSnackBar("Dodano rolę do użytkownika", "OK");
        this.refresh();
      }
    );
  }

  refresh(){
    this.userService.findAllUsers().subscribe(users => {
      this.users.data = users;
      this.changeRoleNames();
    })
  }

  changeRoleNames(){
    this.users.data.forEach(user => {

      let userRoles: string[] = [];

      user.roles.forEach(role => {
        if(role === "ROLE_ADMIN")
        userRoles.push("Administrator");
        if(role === "ROLE_OFFICIAL")
        userRoles.push("Urzędnik");
        if(role === "ROLE_USER")
        userRoles.push("Użytkownik");
        if(role === "ROLE_APPLICANT")
        userRoles.push("Aplikant");
      });
      user.roles = userRoles;
    })
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}
