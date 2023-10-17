import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { WebcamImage, WebcamModule, WebcamUtil } from "ngx-webcam";
import { MediapipeService } from "src/app/services/mediaPipe/mediapipe.service";
import { HomeRoutingModule } from "../../home/home-routing.module";
import { WebcamCaptureComponent } from "./webcam..capture.component";

describe("Given WebcamCaptureComponent", () => {
  let component: WebcamCaptureComponent;
  let fixture: ComponentFixture<WebcamCaptureComponent>;
  let mediaPipeService: MediapipeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcamCaptureComponent],
      imports: [CommonModule, HomeRoutingModule, WebcamModule],
      providers: [],
    });
    spyOn(WebcamUtil, "getAvailableVideoInputs").and.resolveTo(undefined);
    fixture = TestBed.createComponent(WebcamCaptureComponent);
    mediaPipeService = TestBed.inject(MediapipeService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should subscribe to window resize events", () => {
    window.dispatchEvent(new Event("resize"));
    expect(component.windowSize.value).toEqual({
      width: window.innerWidth,
      height: window.innerHeight,
    });
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
      spyOn(mediaPipeService, "classifyImage").and.returnValue(
        Promise.resolve({ category: "test", confidence: 100 })
      );
      component.handleImage(mockWebcamImage);
      expect(component.webcamImage).toEqual(mockWebcamImage);
    });
  });
});
