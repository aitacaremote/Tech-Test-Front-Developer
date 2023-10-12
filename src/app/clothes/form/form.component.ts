import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { clothesFormEmpty } from "src/utils/config";

@Component({
  selector: "cloth-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  clothesForm: FormGroup = this.formBuilder.group(clothesFormEmpty);

  constructor(public formBuilder: FormBuilder) {}

  handleSubmit() {
    console.log("object");
  }
}
