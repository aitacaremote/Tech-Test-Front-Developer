import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Card from 'src/app/core/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: Card

  constructor(
    private _card: CardService,
    private router: Router
  ){

  }

  removeCard(){
    this._card.deleteCard(this.card.id)
  }

  editCard(){
    this.router.navigate([`/new/${this.card.id}`])
  }

}
