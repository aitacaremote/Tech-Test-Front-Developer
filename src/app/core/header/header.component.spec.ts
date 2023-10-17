import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { FormComponent } from "src/app/clothes/form/form.component";
import { MenuComponent } from "../menu/menu.component";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MenuComponent],
      imports: [
        AppRoutingModule,
        MatIconModule,
        RouterModule.forRoot([
          { path: "clothes/all", component: FormComponent },
        ]),
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
