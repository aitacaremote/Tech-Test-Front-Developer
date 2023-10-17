import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { Router } from "@angular/router";
import { StoreService } from "src/app/services/store/store.service";
import { Clothes } from "src/types/clothes";
import { CardComponent } from "./card.component";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let storeService: jasmine.SpyObj<StoreService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const storeServiceSpy = jasmine.createSpyObj("StoreService", [
      "deleteGarment",
    ]);
    const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MatIconModule],
      providers: [
        { provide: StoreService, useValue: storeServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService) as jasmine.SpyObj<StoreService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it("should call storeService.deleteGarment() when handleDelete is called", () => {
    const garment: Clothes = {
      id: 1,
      name: "Shirt",
    } as Clothes;
    component.garment = garment;

    component.handleDelete();

    expect(storeService.deleteGarment).toHaveBeenCalledWith(garment);
  });

  it("should navigate to the correct URL when handleUpdate is called", () => {
    const garment: Clothes = {
      id: 1,
      name: "Shirt",
    } as Clothes;
    component.garment = garment;

    component.handleUpdate();

    expect(router.navigate).toHaveBeenCalledWith(["clothes/garment/Shirt"], {
      state: garment,
    });
  });
});
