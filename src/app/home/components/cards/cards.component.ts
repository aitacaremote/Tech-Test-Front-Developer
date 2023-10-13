import { Component, OnInit } from '@angular/core';
import Card from 'src/app/core/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{
  
  cards!: Card[]

  constructor(
    private _cards: CardService
  ){}

  ngOnInit(): void {
    this._cards.getCards().subscribe( cards => this.cards = cards)
  }
}
