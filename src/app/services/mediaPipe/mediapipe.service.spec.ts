import { TestBed } from "@angular/core/testing";
import { ImageClassifier } from "@mediapipe/tasks-vision";
import { MediapipeService } from "./mediapipe.service";
describe("Given the MediapipeService", () => {
  let service: MediapipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediapipeService],
    }).compileComponents();
    service = TestBed.inject(MediapipeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("When classifyImage is called and imageClassifier is not false", () => {
    it("should classify an image", async () => {
      service.imageClassifier = {
        classify: jasmine.createSpy().and.returnValue({
          classifications: [
            { categories: [{ categoryName: "Test-category" }] },
          ],
        }),
        setOptions: jasmine.createSpy(),
      } as unknown as ImageClassifier;

      const imageElement = document.createElement("img");
      await service.classifyImage(imageElement);

      expect(service.imageClassifier.classify).toHaveBeenCalledWith(
        imageElement
      );
    });
  });
  describe("When classifyImage is called and imageClassifier is false", () => {
    beforeEach(() => {
      service.imageClassifier = undefined;
    });
    it("should classify an image", async () => {
      const imageElement = document.createElement("img");
      try {
        await service.classifyImage(imageElement);
        fail("Expected an exception to be thrown.");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        expect(error.message).toBe("Image classifier is not initialized.");
      }
    });
  });
});
