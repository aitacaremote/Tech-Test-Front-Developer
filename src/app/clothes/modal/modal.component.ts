import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ImageClassifierOutput } from "src/types/imageClassifierOutput";

@Component({
  selector: "cloth-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Input() garment: { imgURL: string; type: ImageClassifierOutput } | null =
    null;
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.isOpen.emit(false);
  }
}
