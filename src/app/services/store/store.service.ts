import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Clothes } from "src/types/clothes";
import { clothes } from "src/utils/clothes";
@Injectable({
  providedIn: "root",
})
export class StoreService {
  private garments$: BehaviorSubject<Clothes[]>;
  constructor() {
    this.garments$ = new BehaviorSubject<Clothes[]>(clothes);
  }

  getGarments() {
    return this.garments$.asObservable();
  }

  setGarments(garments: Clothes[]) {
    this.garments$.next(garments);
  }

  addGarment(garment: Clothes) {
    this.setGarments([...this.garments$.value, garment]);
  }

  deleteGarment(garment: Clothes) {
    const updatedGarments = this.garments$.value.filter(
      (item) => item.id !== garment.id
    );
    this.garments$.next(updatedGarments);
  }

  updateGarment(garment: Clothes) {
    const updatedGarments = this.garments$.value.map((item) => {
      return item.id !== garment.id ? item : garment;
    });
    console.log(updatedGarments);
    this.garments$.next(updatedGarments);
  }
}
