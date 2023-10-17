import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ModalComponent } from "./modal.component";

describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit false when closeModal is called", () => {
    const isOpenEmitSpy = spyOn(component.isOpen, "emit");
    component.closeModal();
    expect(isOpenEmitSpy).toHaveBeenCalledWith(false);
  });
});
