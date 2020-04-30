import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserBasicDTO } from '../model/user.model';
import { UserService } from '../service/user.service';
import { ApplicationFormService } from '../service/application.form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-official-list',
  templateUrl: './official-list.component.html',
  styleUrls: ['./official-list.component.scss']
})
export class OfficialListComponent implements OnInit {

  displayedColumns = ['username', 'name', 'surname', 'institution', 'addInstitution'];

  officials = new MatTableDataSource<UserBasicDTO>();
  username: string;

  constructor(private userService: UserService,
    private applicationFormService: ApplicationFormService,
    private router: Router) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.userService.findOfficials().subscribe(users =>
      this.officials.data = users
    )
  }

  setOfficial(username: string) {
    this.applicationFormService.alterOfficial(username).subscribe(form => {
      this.refresh();
      this.router.navigate(['adminpanel/applicationslist']);
    });
  }

}
