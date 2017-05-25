import {Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { NavGuard } from './_services/nav-guard.service';
import { AuthGuard } from './_guards/auth.guard'

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersComponent },
    { 
        path: 'users/new', 
        component: UserFormComponent,
        canDeactivate: [NavGuard] 
    },
    {
        path: 'users/:id',
        component: UserFormComponent,
        canDeactivate: [NavGuard]
    },
    { path: 'posts', component: PostsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
]);