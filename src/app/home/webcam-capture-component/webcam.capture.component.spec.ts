import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { WebcamModule } from "ngx-webcam";
import { HomeRoutingModule } from "../home-routing.module";
import { WebcamCaptureComponent } from "./webcam..capture.component";

describe("Given WebcamCaptureComponent", () => {
  let component: WebcamCaptureComponent;
  let fixture: ComponentFixture<WebcamCaptureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcamCaptureComponent],
      imports: [CommonModule, HomeRoutingModule, WebcamModule],
    });
    fixture = TestBed.createComponent(WebcamCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
