import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title: BehaviorSubject<string> = new BehaviorSubject('card manager')

  constructor() {}

  getTitlte(){
    return this.title.asObservable().pipe(map( title => title.split(" ").map( word => word[0]?.toUpperCase() + word.slice( 1, word.length)).join(" ")))
  }

  updateTitle(newTitle: string){
    this.title.next(newTitle || this.title.value)
  }

}
