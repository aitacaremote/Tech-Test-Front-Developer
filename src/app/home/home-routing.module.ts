import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: CardsComponent},
    {path: 'new', component: NewCardComponent},
    {path: 'new/:id', component: NewCardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
