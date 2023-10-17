import { TestBed } from "@angular/core/testing";

import { Clothes } from "src/types/clothes";
import { StoreService } from "./store.service";

describe("Given the StoreService", () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreService);
  });

  it("Then should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("When we call the method setGarments whit {name: Test-Name}", () => {
    it("Then {name: Test-Name} should be in garments$", () => {
      service.setGarments([{ name: " Test-Name" } as Clothes]);
      service.getGarments().subscribe((data) => {
        expect(data).toEqual([{ name: " Test-Name" } as Clothes]);
      });
    });
  });

  describe("When we call the method addGarment whit {name: Test-Name}", () => {
    it("Then setGarments should be called", () => {
      const spySetGarments = spyOn(service, "setGarments");
      service.addGarment({ name: " Test-Name" } as Clothes);
      expect(spySetGarments).toHaveBeenCalled();
    });
  });

  describe("When we call the method deleteGarment whit {id: 2, name: Test-Name}", () => {
    it("Then {id: 2, name: Test-Name} should not be in the result when we call getGarments", () => {
      service.setGarments([
        { id: 1, name: " Test-Name1" } as Clothes,
        { id: 2, name: " Test-Name1" } as Clothes,
      ]);
      service.deleteGarment({ id: 1, name: " Test-Name1" } as Clothes);
      service.getGarments().subscribe((data) => {
        expect(data).toEqual([{ id: 2, name: " Test-Name1" } as Clothes]);
      });
    });
  });

  describe("When we call the method updateGarment whit {id: 2, name: Test-Name-Modify}", () => {
    it("Then {id: 2, name: Test-Name} should not be in the result when we call getGarments", () => {
      service.setGarments([
        { id: 1, name: " Test-Name1" } as Clothes,
        { id: 2, name: " Test-Name1" } as Clothes,
      ]);
      service.updateGarment({ id: 1, name: "Test-Name-Modify" } as Clothes);
      service.getGarments().subscribe((data) => {
        expect(data).toEqual([
          { id: 1, name: "Test-Name-Modify" } as Clothes,
          { id: 2, name: " Test-Name1" } as Clothes,
        ]);
      });
    });
  });
});
