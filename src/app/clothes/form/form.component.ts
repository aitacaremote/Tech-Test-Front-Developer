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
  constructor(public formBuilder: FormBuilder, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      const data = state as { imgURL: string; type: ImageClassifierOutput };
      this.imgUrl = data.imgURL;
      const type = data.type.category;
      this.clothesForm.patchValue({
        type: type,
      });
      console.log("desde form", type);
    }
  }

  handleSubmit() {
    console.log("object");
  }
}
