import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Navigation, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ModalComponent } from "../modal/modal.component";
import { FormComponent } from "./form.component";

describe("Given FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let router: Router;

  const mockState = {
    imgURL: "mockImageUrl",
    type: { category: "mockCategory", confidence: 100 },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, ModalComponent],
      imports: [
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [],
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it("should create", () => {
    spyOn(router, "getCurrentNavigation").and.returnValues({
      extras: {
        state: mockState,
      },
    } as unknown as Navigation);
    router.getCurrentNavigation();
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
