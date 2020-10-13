import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from './developers/developers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'developers', component: DevelopersComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: DeveloperDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }