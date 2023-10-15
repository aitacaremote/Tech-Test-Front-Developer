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

  describe("When classifyImage is called", () => {
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
});
