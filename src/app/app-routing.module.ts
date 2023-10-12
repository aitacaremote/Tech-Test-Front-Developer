import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BookADemoComponent } from './components/book-a-demo/book-a-demo.component';
import { DisplayDemoDetailsComponent } from './components/display-demo-details/display-demo-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'book-a-demo', component: BookADemoComponent },
  { path: 'app-display-demo-details', component: DisplayDemoDetailsComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

