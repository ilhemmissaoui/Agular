import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
 
   { path : '', component: HomeComponent},
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent},
   { path: 'home', component: HomeComponent},
   { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
