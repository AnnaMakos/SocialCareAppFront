import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../service/institution.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { InstitutionDTO } from '../institution/institution.model'
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent implements OnInit {

  institutions = new MatTableDataSource<InstitutionDTO>();
  displayedColumns = ['name', 'address', 'addInstitution'];
  username: string;

  constructor(private institutionService: InstitutionService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.institutionService.findInstitutions().subscribe(institutions =>
      this.institutions.data = institutions)
    this.getUsername();
  }

  getUsername() {
    this.userService.currentUsername.subscribe(username => this.username = username);
  }

  alterUserInstitution(institutionId: number) {
    this.userService.alterUserInstitution(this.username, institutionId).subscribe(user => {
      this.refresh();
      console.log("Instytucja zostala dodana do uzytkownika");
      this.openSnackBar("Instytucja została dodana do użytkownika", "OK");
      this.router.navigate(['adminpanel/institutionpanel']);

    }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }
}
