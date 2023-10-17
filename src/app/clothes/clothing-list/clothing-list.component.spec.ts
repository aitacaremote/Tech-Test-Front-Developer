import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MatIconModule } from "@angular/material/icon";
import { CardComponent } from "../card/card.component";
import { ClothingListComponent } from "./clothing-list.component";

describe("ClothingListComponent", () => {
  let component: ClothingListComponent;
  let fixture: ComponentFixture<ClothingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothingListComponent, CardComponent],
      imports: [MatIconModule],
    });
    fixture = TestBed.createComponent(ClothingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
