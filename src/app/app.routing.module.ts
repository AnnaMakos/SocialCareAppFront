import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { InstitutionPanelComponent } from './institution-panel/institution-panel.component';
import { InstitutionListComponent } from './institution-list/institution-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeInstitutionsComponent } from './home-institutions/home-institutions.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: 'profile', component: UserProfileComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, children: [
      { path: 'institutions', component: HomeInstitutionsComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'institutions', component: HomeInstitutionsComponent }
    ]
  },
  {
    path: 'adminpanel', component: AdminPanelComponent, children: [
      { path: 'userlist', component: UserListComponent },
      { path: 'institutionpanel', component: InstitutionPanelComponent },
      { path: 'institutionlist', component: InstitutionListComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }