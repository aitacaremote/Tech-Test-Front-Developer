import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { StoreService } from "src/app/services/store/store.service";
import { Clothes } from "src/types/clothes";
import { ImageClassifierOutput } from "src/types/imageClassifierOutput";
import { clothesFormEmpty } from "src/utils/config";
@Component({
  selector: "cloth-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  clothesForm: FormGroup = this.formBuilder.group(clothesFormEmpty);
  imgUrl = "";
  modalIsOpen = true;
  idNewGarment = 0;
  garment: { imgURL: string; type: ImageClassifierOutput } | null = null;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private storeService: StoreService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.garment = state as { imgURL: string; type: ImageClassifierOutput };
      this.imgUrl = this.garment.imgURL;
      const type = this.garment.type.category;
      this.clothesForm.patchValue({
        type: type,
      });
    }

    this.storeService.getGarments().subscribe((data) => {
      data
        ? (this.idNewGarment =
            data.sort(function (a, b) {
              return b.id - a.id;
            })[0].id + 1)
        : (this.idNewGarment = 1);
    });
  }

  closeModal(value: boolean) {
    this.modalIsOpen = value;
  }

  handleSubmit() {
    const newGarment: Clothes = this.clothesForm.value;
    newGarment.urlPhoto = this.imgUrl;
    newGarment.id = this.idNewGarment;
    this.storeService.addGarment(newGarment);
    this.router.navigateByUrl("/home");
  }
}
