import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "../card/card.component";
import { ClothingListComponent } from "./clothing-list.component";

describe("ClothingListComponent", () => {
  let component: ClothingListComponent;
  let fixture: ComponentFixture<ClothingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothingListComponent, CardComponent],
    });
    fixture = TestBed.createComponent(ClothingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
