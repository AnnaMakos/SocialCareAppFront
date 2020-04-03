import { Component, OnInit } from '@angular/core';
import { VisitService } from '../service/visit.service';
import { MatTableDataSource } from '@angular/material';
import { VisitDTO } from '../model/visit.model';
import { UserService } from '../service/user.service';
import { UserDTO } from '../model/user.model';

@Component({
  selector: 'app-my-visits',
  templateUrl: './my-visits.component.html',
  styleUrls: ['./my-visits.component.scss']
})
export class MyVisitsComponent implements OnInit {

  visits = new MatTableDataSource<VisitDTO>();
  displayedColumns = ["institution", "address", "official", "day", "time"];
  currentUser: UserDTO;

  constructor(private visitService: VisitService, private userService: UserService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.visitService.findVisitsByUser(this.currentUser.username).subscribe(visits => {
        this.visits.data = visits;
      })
    });

  }

}
