import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { WebcamModule } from "ngx-webcam";
import { CardComponent } from "./card/card.component";
import { ClothesRoutingModule } from "./clothes-routing.module";
import { ClothingListComponent } from "./clothing-list/clothing-list.component";
import { DetailsComponent } from "./details/details.component";
import { FormComponent } from "./form/form.component";
import { WebcamCaptureComponent } from "./webcam-capture-component/webcam..capture.component";
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    ClothingListComponent,
    CardComponent,
    FormComponent,
    DetailsComponent,
    WebcamCaptureComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule,
    FormsModule,
    WebcamModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ClothesModule {}
