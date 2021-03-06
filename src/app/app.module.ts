import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth/auth.service';
import { TokenStorage } from './auth/token.storage';
import { Interceptor } from './auth/interceptor';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatTableDataSource, MatSnackBarModule, MatMenuModule, MatIconModule, MatDividerModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatFormField, MatSelectModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { InstitutionPanelComponent } from './institution-panel/institution-panel.component';
import { InstitutionListComponent } from './institution-list/institution-list.component';
import { InstitutionService } from './service/institution.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeInstitutionsComponent } from './home-institutions/home-institutions.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { VisitPanelComponent } from './visit-panel/visit-panel.component';
import { VisitService } from './service/visit.service';
import { MyVisitsComponent } from './my-visits/my-visits.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationService } from './service/application.service';
import { ApplicationAddComponent } from './application-add/application-add.component';
import { FileService } from './service/file.service';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationFormService } from './service/application.form.service';
import { UserApplicationListComponent } from './user-application-list/user-application-list.component';
import { AdminApplicationsListComponent } from './admin-applications-list/admin-applications-list.component';
import { OfficialListComponent } from './official-list/official-list.component';
import { OfficialPanelComponent } from './official-panel/official-panel.component';
import { OfficialApplicationsComponent } from './official-applications/official-applications.component';
import { ApplicationFormViewComponent } from './application-form-view/application-form-view.component';
import { UserApplicationFormViewComponent } from './user-application-form-view/user-application-form-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    UserListComponent,
    AdminPanelComponent,
    InstitutionPanelComponent,
    InstitutionListComponent,
    UserProfileComponent,
    HomeInstitutionsComponent,
    GoogleMapsComponent,
    VisitPanelComponent,
    MyVisitsComponent,
    ApplicationListComponent,
    ApplicationAddComponent,
    ApplicationFormComponent,
    UserApplicationListComponent,
    UserApplicationListComponent,
    AdminApplicationsListComponent,
    OfficialListComponent,
    OfficialPanelComponent,
    OfficialApplicationsComponent,
    ApplicationFormViewComponent,
    UserApplicationFormViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    TokenStorage,
    UserService,
    InstitutionService,
    ApplicationService,
    VisitService,
    FileService,
    ApplicationFormService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
