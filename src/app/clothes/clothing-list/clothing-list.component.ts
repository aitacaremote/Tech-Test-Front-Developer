import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/app/services/store/store.service";
import { Clothes } from "src/types/clothes";

@Component({
  selector: "cloth-clothing-list",
  templateUrl: "./clothing-list.component.html",
  styleUrls: ["./clothing-list.component.scss"],
})
export class ClothingListComponent implements OnInit {
  public garments: Clothes[];
  constructor(private storeService: StoreService) {
    this.garments = [];
  }

  ngOnInit(): void {
    this.storeService.getGarments().subscribe((data) => {
      this.garments = data;
    });
  }
}
