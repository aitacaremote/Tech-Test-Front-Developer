import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';



const MATERIALS = [
  MatFormFieldModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatChipsModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule
];

@NgModule({
  imports: MATERIALS,
  exports: MATERIALS
})
export class MaterialsModule {}
