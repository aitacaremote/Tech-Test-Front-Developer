import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { CoreRoutingModule } from './core-routing.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const IMPORTS = [
  CommonModule,
  CoreRoutingModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    ...IMPORTS
  ],
  exports:[
    ...IMPORTS
  ]
})
export class CoreModule { }
