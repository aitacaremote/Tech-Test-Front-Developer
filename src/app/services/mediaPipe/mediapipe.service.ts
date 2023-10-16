import { Injectable } from "@angular/core";
import { FilesetResolver, ImageClassifier } from "@mediapipe/tasks-vision";

@Injectable({
  providedIn: "root",
})
export class MediapipeService {
  public imageClassifier: ImageClassifier | undefined;
  private runningMode = "IMAGE";

  constructor() {
    this.initializeImageClassifier();
  }

  public async initializeImageClassifier() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"
    );

    this.imageClassifier = await ImageClassifier.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/float32/1/efficientnet_lite0.tflite`,
      },
      maxResults: 1,
      runningMode: "IMAGE",
    });
  }

  public async classifyImage(imageElement: HTMLImageElement) {
    if (!this.imageClassifier) {
      throw new Error("Image classifier is not initialized.");
    }

    this.runningMode = "IMAGE";
    await this.imageClassifier.setOptions({ runningMode: "IMAGE" });

    const classificationResult = this.imageClassifier.classify(imageElement);
    const classifications = classificationResult.classifications;
    const classificationData = {
      category: classifications[0].categories[0].categoryName,
      confidence: Math.round(classifications[0].categories[0].score) * 100,
    };

    return classificationData;
  }
}
