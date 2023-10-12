import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesRoutingModule } from './clothes-routing.module';
import { ClothingListComponent } from './clothing-list/clothing-list.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ClothingListComponent,
    CardComponent,
    FormComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule
  ]
})
export class ClothesModule { }
