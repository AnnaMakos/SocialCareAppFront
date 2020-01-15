import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../auth/token.storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ifSignedIn: boolean = false;

  constructor(private tokenStorage: TokenStorage) {
    if (tokenStorage.ifSignedIn()) {
      this.ifSignedIn = true;
    }
  }
  
  ngOnInit() {
  }

}
