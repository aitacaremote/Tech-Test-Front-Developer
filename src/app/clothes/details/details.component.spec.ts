import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { clothes } from "src/utils/clothes";
import { DetailsComponent } from "./details.component";

describe("DetailsComponent", () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const mockState = clothes[0];
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            getCurrentNavigation: () => ({
              extras: { state: mockState },
            }),
            navigateByUrl: () => ({}),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(DetailsComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("When we call handleSubmit method", () => {
    it("The method router.navigateByUrl should be called", () => {
      const spyNavigate = spyOn(router, "navigateByUrl");
      component.handleSubmit();
      expect(spyNavigate).toHaveBeenCalled();
    });
  });
});
