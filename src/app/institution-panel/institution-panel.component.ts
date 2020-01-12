import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserBasicDTO } from '../user/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-institution-panel',
  templateUrl: './institution-panel.component.html',
  styleUrls: ['./institution-panel.component.scss']
})
export class InstitutionPanelComponent implements OnInit {
  displayedColumns = ['username', 'name', 'surname', 'email', 'institution', 'addInstitution'];

  officials = new MatTableDataSource<UserBasicDTO>();
  username: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.userService.findOfficials().subscribe(users =>
      this.officials.data = users
    )
  }

  selectUsername(username: string) {
    this.userService.changeUsername(username);
  }


}
