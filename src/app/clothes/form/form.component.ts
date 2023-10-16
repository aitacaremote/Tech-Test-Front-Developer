import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
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
  garment: { imgURL: string; type: ImageClassifierOutput } | null = null;
  constructor(public formBuilder: FormBuilder, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.garment = state as { imgURL: string; type: ImageClassifierOutput };
      this.imgUrl = this.garment.imgURL;
      const type = this.garment.type.category;
      this.clothesForm.patchValue({
        type: type,
      });
    }
  }

  closeModal(value: boolean) {
    this.modalIsOpen = value;
  }
  handleSubmit() {
    console.log("object");
  }
}
