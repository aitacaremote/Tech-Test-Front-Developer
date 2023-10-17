import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { FooterComponent } from "./core/footer/footer.component";
import { HeaderComponent } from "./core/header/header.component";

describe("Given the AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ClothTagger'`, () => {
    expect(component.title).toEqual("ClothTagger");
  });
});
