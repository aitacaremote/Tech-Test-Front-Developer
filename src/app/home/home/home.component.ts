import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "cloth-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private router: Router) {}

  handleExplore() {
    this.router.navigateByUrl("clothes/all");
  }
}
