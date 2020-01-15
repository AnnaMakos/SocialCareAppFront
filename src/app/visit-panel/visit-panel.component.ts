import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../model/user.model';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../service/user.service';
import { VisitService } from '../service/visit.service';
import { VisitDTO } from '../model/visit.model';

@Component({
  selector: 'app-visit-panel',
  templateUrl: './visit-panel.component.html',
  styleUrls: ['./visit-panel.component.scss']
})
export class VisitPanelComponent implements OnInit {

  visits = new MatTableDataSource<VisitDTO>();
  displayedColumns = ["day", "time", "official", "choose"];
  minDate = new Date();

  constructor(private visitService: VisitService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.visitService.findAllVisit().subscribe(visits =>
      this.visits.data = visits)
  }

  applyFilter(filterValue: string) {
    this.visits.filter = filterValue.trim().toLowerCase();
  }

  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
}


