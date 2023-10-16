import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "src/app/services/store/store.service";
import { Clothes } from "src/types/clothes";

@Component({
  selector: "cloth-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() garment!: Clothes;
  constructor(private storeService: StoreService, public router: Router) {}

  handleDelete() {
    this.storeService.deleteGarment(this.garment);
  }

  handleUpdate() {
    this.router.navigate([`clothes/garment/${this.garment.name}`], {
      state: this.garment,
    });
  }
}
