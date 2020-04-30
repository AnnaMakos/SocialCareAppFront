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
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VisitPanelComponent } from './visit-panel/visit-panel.component';
import { MyVisitsComponent } from './my-visits/my-visits.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationAddComponent } from './application-add/application-add.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { UserApplicationListComponent } from './user-application-list/user-application-list.component';
import { AdminApplicationsListComponent } from './admin-applications-list/admin-applications-list.component';
import { OfficialListComponent } from './official-list/official-list.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: 'profile', component: UserProfileComponent },
      { path: 'visits', component: MyVisitsComponent },
      { path: 'applications', component: UserApplicationListComponent }
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
      {
        path: 'institutions', component: HomeInstitutionsComponent, children: [
          { path: 'maps', component: GoogleMapsComponent }
        ]
      },
      { path: 'visitpanel', component: VisitPanelComponent },
      { path: 'applications', component: ApplicationListComponent },
      { path: 'form', component: ApplicationFormComponent }
    ]
  },
  {
    path: 'adminpanel', component: AdminPanelComponent, children: [
      { path: 'userlist', component: UserListComponent },
      { path: 'institutionpanel', component: InstitutionPanelComponent },
      { path: 'institutionlist', component: InstitutionListComponent },
      { path: 'applicationadd', component: ApplicationAddComponent },
      { path: 'applicationslist', component: AdminApplicationsListComponent},
      { path: 'officiallist', component: OfficialListComponent}
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