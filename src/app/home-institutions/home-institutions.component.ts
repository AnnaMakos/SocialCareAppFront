import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { InstitutionDTO } from '../model/institution.model';
import { InstitutionService } from '../service/institution.service';
import { UserService } from '../service/user.service';
import { UserBasicDTO } from '../model/user.model';
import { TokenStorage } from '../auth/token.storage';

@Component({
  selector: 'app-home-institutions',
  templateUrl: './home-institutions.component.html',
  styleUrls: ['./home-institutions.component.scss']
})
export class HomeInstitutionsComponent implements OnInit {

  institutions = new MatTableDataSource<InstitutionDTO>();
  displayedColumns = ['name', 'address', 'officials', 'map'];
  officials: UserBasicDTO[];
  ifSignedIn: boolean = false;
  currentInstitutionId: number;

  constructor(private institutionService: InstitutionService,
    private userService: UserService,
    private tokenStorage: TokenStorage) {
    if (tokenStorage.ifSignedIn()) {
      this.ifSignedIn = true;
    }
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.institutionService.findInstitutions().subscribe(institutions =>
      this.institutions.data = institutions)
  }

  public findOfficialsByInstitution(institutionID: number) {
    this.userService.findOfficialsByInstitution(institutionID).subscribe(officials =>
      this.officials = officials);
  }

  selectInstitutionId(id: number) {
    this.institutionService.changeInstitutionId(id);
  }


}
