import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
