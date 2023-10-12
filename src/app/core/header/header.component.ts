import { Component } from "@angular/core";
import { MenuOption } from "src/types/menu.options";
import { menuOptions } from "src/utils/config";

@Component({
  selector: "cloth-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  menuOptions: MenuOption[];
  constructor() {
    this.menuOptions = menuOptions;
  }
}
