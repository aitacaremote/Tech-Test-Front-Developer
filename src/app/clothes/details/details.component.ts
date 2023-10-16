import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StoreService } from "src/app/services/store/store.service";
import { Clothes } from "src/types/clothes";

@Component({
  selector: "cloth-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  garment: Clothes | null = null;
  clothesForm: FormGroup = this.formBuilder.group([]);
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private storeService: StoreService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log(state);
    if (state) {
      this.garment = state as Clothes;
      console.log(this.garment.name, "garr");
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  handleSubmit() {
    if (this.garment?.urlPhoto && this.garment?.id) {
      const newGarment: Clothes = this.clothesForm.value;
      newGarment.urlPhoto = this.garment?.urlPhoto;
      newGarment.id = this.garment?.id;
      this.storeService.updateGarment(newGarment);
      this.router.navigateByUrl("clothes/all");
    }
  }

  initializeForm() {
    this.clothesForm = this.formBuilder.group({
      name: [this.garment?.name, [Validators.required]],
      type: [this.garment?.type, [Validators.required]],
      color: [this.garment?.color, [Validators.required]],
      size: [this.garment?.size, [Validators.required]],
      price: [this.garment?.price, [Validators.required]],
    });
  }
}
