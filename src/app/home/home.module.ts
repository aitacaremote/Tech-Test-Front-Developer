import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MediapipeService } from "../services/mediaPipe/mediapipe.service";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [MediapipeService],
})
export class HomeModule {}
