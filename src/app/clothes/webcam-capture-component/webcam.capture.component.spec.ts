import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { WebcamImage, WebcamModule, WebcamUtil } from "ngx-webcam";
import { HomeRoutingModule } from "../../home/home-routing.module";
import { WebcamCaptureComponent } from "./webcam..capture.component";

describe("Given WebcamCaptureComponent", () => {
  let component: WebcamCaptureComponent;
  let fixture: ComponentFixture<WebcamCaptureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcamCaptureComponent],
      imports: [CommonModule, HomeRoutingModule, WebcamModule],
    });
    spyOn(WebcamUtil, "getAvailableVideoInputs").and.resolveTo(undefined);
    fixture = TestBed.createComponent(WebcamCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("When triggerSnapshot is called", () => {
    it("trigger.next should be called", () => {
      const spytriggerNext = spyOn(component.trigger, "next");
      component.triggerSnapshot();
      expect(spytriggerNext).toHaveBeenCalled();
    });
  });

  describe("When handleImage is called", () => {
    it("trigger.next should be called", () => {
      const mockWebcamImage = {
        test: "Test webcamImage",
      } as unknown as WebcamImage;
      component.handleImage(mockWebcamImage);
      expect(component.webcamImage).toEqual(mockWebcamImage);
    });
  });
});
