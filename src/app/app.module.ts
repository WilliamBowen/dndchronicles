import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { SpinnerComponent } from './shared/spinner.component';
import { PaginationComponent } from './shared/pagination.component';

import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';

import { NavGuard } from './_services/nav-guard.service';
import { AuthGuard } from './_guards/auth.guard';

import { UserService } from './_services/user.service';
import { PostService } from './posts/posts.service';
import { UserFormComponent } from './user-form/user-form.component';

import { ValidatorService } from './_services/validator.service';
import { AlertComponent } from './_directives/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';

import { AppConfig } from './app.config'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,
    PaginationComponent,
    UserFormComponent,
    NotFoundComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [
    AlertService,
    AuthenticationService,
    AppConfig,
    UserService,
    PostService, 
    ValidatorService, 
    NavGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
