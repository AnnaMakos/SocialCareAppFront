import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    public dialog: MatDialog,
    private authService: AuthService,
    private snackBar: MatSnackBar) { }

  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  pesel: string;
  street: string;
  streetNumber: string;
  localNumber: string;
  postcode: string;
  city: string;
  password: string;
  roles = ['user'];

  ngOnInit() {
  }

  register() {
    this.authService.register(this.name, this.surname, this.username, this.email,
      this.pesel, this.street, this.streetNumber, this.localNumber, this.postcode,
      this.city, this.password, this.roles).subscribe(
        data => {
          this.openSnackBar("Rejestracja przebiegła pomyślnie", "OK");
          this.router.navigate(['login']);
        }
      )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    })
  }

}


