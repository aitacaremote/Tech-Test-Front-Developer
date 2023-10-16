import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Router } from "@angular/router";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("When we call the method handleExplore", () => {
    it("router.navigateByUrl should be called", () => {
      const navigateSpy = spyOn(router, "navigateByUrl");
      component.handleExplore();
      expect(navigateSpy).toHaveBeenCalledWith("clothes/all");
    });
  });
});
