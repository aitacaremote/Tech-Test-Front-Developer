import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    NewCardComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
