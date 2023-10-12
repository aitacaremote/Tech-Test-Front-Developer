import { Component, Input } from "@angular/core";
import { MenuOption } from "src/types/menu.options";

@Component({
  selector: "cloth-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() menuOptions!: MenuOption[];
}
