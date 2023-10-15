import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { WebcamComponent, WebcamImage, WebcamUtil } from "ngx-webcam";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { MediapipeService } from "src/app/services/mediaPipe/mediapipe.service";
import { ImageClassifierOutput } from "src/types/imageClassifierOutput";
@Component({
  selector: "cloth-webcamp-capture-component",
  templateUrl: "./webcam.capture.component.html",
  styleUrls: ["./webcam.capture.component.scss"],
})
export class WebcamCaptureComponent implements AfterViewInit {
  @ViewChild("webcam", { static: false }) webcamElement!: WebcamComponent;
  public webcamImage: WebcamImage | null = null;
  public availableVideoInputs: MediaDeviceInfo[] | null = null;
  public trigger: Subject<void> = new Subject<void>();
  public windowSize = new BehaviorSubject<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  public windowWith = 0;

  constructor(private mediaPipe: MediapipeService, public router: Router) {
    window.addEventListener("resize", () => {
      this.windowSize.next({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });

    this.windowSize.subscribe((res) => {
      this.windowWith = res.width;
    });
  }
  triggerSnapshot(): void {
    this.trigger.next();
  }

  ngAfterViewInit(): void {
    this.getVideoInputs();
  }

  getVideoInputs() {
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices) => {
      this.availableVideoInputs = mediaDevices;
    });
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    if (this.webcamImage) {
      const imageElement = new Image();
      imageElement.src = this.webcamImage.imageAsDataUrl;

      imageElement.onload = () => {
        this.mediaPipe
          .classifyImage(imageElement)
          .then((result: ImageClassifierOutput) => {
            this.router.navigate(["clothes/form"], {
              state: { imgURL: imageElement.src, type: result },
            });
          })
          .catch((error) => {
            console.error("Error al clasificar imagen:", error);
          });
      };
    }
  }
}
