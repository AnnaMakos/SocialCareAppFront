import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './auth/auth.service';
import { TokenStorage } from './auth/token.storage';
import { Interceptor } from './auth/interceptor';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatTableDataSource, MatSnackBarModule, MatMenuModule, MatIconModule, MatDividerModule, MatListModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
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
    VisitPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
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
    MatNativeDateModule
  ],
  providers: [AuthService, TokenStorage, UserService, InstitutionService, VisitService,
  {provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true}],  
  bootstrap: [AppComponent]
})
export class AppModule { }
