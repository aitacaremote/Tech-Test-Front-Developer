import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WebcamModule } from "ngx-webcam";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { WebcamCaptureComponent } from "./webcam-capture-component/webcam..capture.component";
@NgModule({
  declarations: [HomeComponent, WebcamCaptureComponent],
  imports: [CommonModule, HomeRoutingModule, WebcamModule],
  providers: [],
})
export class HomeModule {}
