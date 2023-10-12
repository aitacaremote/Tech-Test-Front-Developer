import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebcamCaptureComponent } from "./webcam-capture-component/webcam..capture.component";

const routes: Routes = [{ path: "", component: WebcamCaptureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
