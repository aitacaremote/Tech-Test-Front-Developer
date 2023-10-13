import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { WebcamComponent, WebcamImage, WebcamUtil } from "ngx-webcam";
import { Observable, Subject } from "rxjs";

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
  }
}
