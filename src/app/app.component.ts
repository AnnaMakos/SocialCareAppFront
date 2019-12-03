import { Component } from '@angular/core';
import { TokenStorage } from './auth/token.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-care-app';

  username: string = '';
  ifSignedIn: boolean = false;
  roles: string[] = [];

  constructor(private tokenStorage: TokenStorage) {
    if(tokenStorage.ifSignedIn()){
      this.username = tokenStorage.getUsername();
      this.ifSignedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  signOut(): void {
    this.tokenStorage.signOut();
    this.reloadPage();

  }

  reloadPage(): void{
    window.location.reload();
  }

  showRoles(): void{
    console.log(this.roles);
  }

  ifAdmin(): boolean {
    let isAdmin = false;

    this.roles.forEach(role => {
      if(role == "ROLE_ADMIN"){
        isAdmin = true;
      }
    });
    return isAdmin;
  }

}
