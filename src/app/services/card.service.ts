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

  deleteCard(id: string){
    let newCards = this.cards.value
    console.log(this.cards.value.findIndex( (card: Card) => card.id == id))
    newCards.splice(this.cards.value.findIndex( (card: Card) => card.id == id), 1)
    this.cards.next(newCards)
    localStorage.setItem('card', this.cards.value.map( card => JSON.stringify(card)).join('&-&'))
    this._snackBar.open('Card deleted successfully', 'ready', {
      duration: 2000
    })
  }

  createCard(card: Card){
    let newCards = this.cards.value
    newCards.push(card)
    this.cards.next(newCards)
    localStorage.setItem('card', this.cards.value.map( card => JSON.stringify(card)).join('&-&'))
    this._snackBar.open('Card created successfully', 'ready', {
      duration: 2000
    })
  }

  updateCard(cardUpdating: Card){
    let newCards = this.cards.value
    newCards[newCards.findIndex( card => card.id == cardUpdating.id)] = cardUpdating
    this.cards.next(newCards)
    localStorage.setItem('card', this.cards.value.map( card => JSON.stringify(card)).join('&-&'))
    this._snackBar.open('Card Updated successfully', 'ready', {
      duration: 2000
    })
  }

}
