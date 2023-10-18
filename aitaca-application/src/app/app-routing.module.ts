import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPageFormComponent } from './application-page-form/application-page-form.component';
import { ApplicationSuccessPageComponent } from './application-success-page/application-success-page.component';

const routes: Routes = [
  { path: 'application-page-form', component: ApplicationPageFormComponent , title: 'Home Page'},
  { path: 'app-application-success-page', component: ApplicationSuccessPageComponent , title: 'Final Page'},
  { path: '',   redirectTo: 'application-page-form', pathMatch: 'full' }
];
@NgModule({
  imports: [ BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
