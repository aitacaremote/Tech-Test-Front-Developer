import { Injectable } from '@angular/core';
import Card from '../core/models/card.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  cards = new BehaviorSubject(localStorage.getItem('card')?.split('&-&').map( card => JSON.parse(card))!) 

  getCards(){
    return this.cards.asObservable()
  }

  getCard(id: string){
    return this.cards.value.find( card => card.id == id)
  }

  deleteCard(id: string) {
    const cards = this.cards.value;
    const cardIndex = cards.findIndex(card => card.id === id);
  
    if (cardIndex !== -1) {
      cards.splice(cardIndex, 1);
      this.cards.next(cards);
      this.updateLocalStorage();
      this.showSnackBar('Card deleted successfully');
    }
  }
  
  createCard(card: Card) {
    const cards = this.cards.value;
    cards.push(card);
    this.cards.next(cards);
    this.updateLocalStorage();
    this.showSnackBar('Card created successfully');
  }
  
  updateCard(cardUpdating: Card) {
    const cards = this.cards.value;
    const cardIndex = cards.findIndex(card => card.id === cardUpdating.id);
  
    if (cardIndex !== -1) {
      cards[cardIndex] = cardUpdating;
      this.cards.next(cards);
      this.updateLocalStorage();
      this.showSnackBar('Card updated successfully');
    }
  }
  
  updateLocalStorage() {
    const serializedCards = this.cards.value.map(card => JSON.stringify(card)).join('&-&');
    localStorage.setItem('card', serializedCards);
  }
  
  showSnackBar(message: string) {
    this._snackBar.open(message, 'ready', {
      duration: 2000
    });
  }

}
