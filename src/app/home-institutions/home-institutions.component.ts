import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { InstitutionDTO } from '../institution/institution.model';
import { InstitutionService } from '../service/institution.service';

@Component({
  selector: 'app-home-institutions',
  templateUrl: './home-institutions.component.html',
  styleUrls: ['./home-institutions.component.scss']
})
export class HomeInstitutionsComponent implements OnInit {


  institutions = new MatTableDataSource<InstitutionDTO>();
  displayedColumns = ['name', 'address', 'officials'];

  constructor(private institutionService: InstitutionService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.institutionService.findInstitutions().subscribe(institutions =>
      this.institutions.data = institutions)
  }

}
