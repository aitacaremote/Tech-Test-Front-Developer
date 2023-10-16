import { Component, Input } from "@angular/core";
import { Clothes } from "src/types/clothes";

@Component({
  selector: "cloth-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() garment!: Clothes;
}
