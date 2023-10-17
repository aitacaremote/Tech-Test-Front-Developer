import { Component } from "@angular/core";
import { clothes } from "src/utils/clothes";
import { StoreService } from "./services/store/store.service";

@Component({
  selector: "cloth-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ClothTagger";
  constructor(private storeService: StoreService) {
    this.storeService.setGarments(clothes);
  }
}
