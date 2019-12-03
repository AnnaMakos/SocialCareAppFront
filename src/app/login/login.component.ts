import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { TokenStorage } from '../auth/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) {
  }

  username: string;
  password: string;

  ngOnInit() {
    if (this.token.ifSignedIn()) {
      this.router.navigate(['home']);
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.token.saveUsername(data.username);
        this.token.saveAuthorities(data.authorities);
        this.reloadPage();
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}