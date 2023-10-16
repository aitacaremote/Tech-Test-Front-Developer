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
}
