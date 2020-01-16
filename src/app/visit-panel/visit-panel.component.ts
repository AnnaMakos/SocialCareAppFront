import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDTO, UserBasicDTO } from '../model/user.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UserService } from '../service/user.service';
import { VisitService } from '../service/visit.service';
import { VisitDTO } from '../model/visit.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-visit-panel',
  templateUrl: './visit-panel.component.html',
  styleUrls: ['./visit-panel.component.scss']
})
export class VisitPanelComponent implements OnInit {

  visits = new MatTableDataSource<VisitDTO>();
  displayedColumns = ["institution", "address", "official", "day", "time", "choose"];
  minDate = new Date();
  currentUser: UserDTO;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private visitService: VisitService, private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.visits.paginator = this.paginator;
    this.visitService.findAllVisit().subscribe(visits =>
      this.visits.data = visits)
    this.userService.getCurrentUser().subscribe(user =>
      this.currentUser = user)

  }

  alterVisitToTaken(username: string, id: number) {
    this.visitService.alterVisitToTaken(username, id).subscribe(visit =>
      this.refresh());
    console.log("=>>> visit id: " + id + " username: " + username);
  }

  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

  dateSearchFilter(filterValue: Date) {
    let transformedDate: string = '';
    let datePipe: DatePipe = new DatePipe('en-US');
    transformedDate = datePipe.transform(filterValue, 'yyyy-MM-dd');
    this.visits.filter = transformedDate.trim().toLowerCase();
  }

}


