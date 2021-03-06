import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserDTO } from '../model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: UserDTO;
  institutionName: string;
  currentUserLoaded: Promise<boolean>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUserLoaded = Promise.resolve(true);
      this.currentUser = user;
    })
  }

}
