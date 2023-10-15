import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClothingListComponent } from "./clothing-list/clothing-list.component";
import { DetailsComponent } from "./details/details.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  { path: "addclothes", component: FormComponent },
  { path: "all", component: ClothingListComponent },
  { path: "form", component: FormComponent },
  { path: "garment/:id", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothesRoutingModule {}
