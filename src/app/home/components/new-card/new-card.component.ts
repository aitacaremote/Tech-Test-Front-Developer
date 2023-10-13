import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import Card from 'src/app/core/models/card.model';
import { TitleService } from 'src/app/services/title.service';

import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit{
  
  updating!: Card
  picture!: string
  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _title: TitleService,
    private _cards: CardService
  ){}

  ngOnInit(){
    this._title.updateTitle('Create Card')
    this.route.params.subscribe( params => {
      this.updating = this._cards.getCard(params["id"])
      this.picture = this.updating?.picture
      this.form = this.fb.group({
        id: [this.updating?.id || ((Math.floor(Math.random() * 100000)) + Date.now()).toString()],
        firstname: [this.updating?.firstname, [Validators.required, Validators.minLength(3)]],
        lastname: [this.updating?.lastname, [Validators.required, Validators.minLength(3)]],
        picture: [this.updating?.picture],
        text: [this.updating?.text, [Validators.maxLength(128)]],
        metadata: this.fb.group({
          createdAt: [this.updating?.metadata?.createdAt],
          updatedAt: [this.updating?.metadata?.updatedAt]
        })
      })
    })
  }

  saveCard(){
    this.form.patchValue({
      picture: this.picture
    });
    (this.form.get('metadata') as FormGroup).patchValue({
      createdAt: this.form.value.metadata.createdAt || Date.now(),
      updatedAt: Date.now()
    })
    if(this.updating){
      this._cards.updateCard(this.form.value)
    }
    else{
      this._cards.createCard(this.form.value)
    }
    this.form.reset()
    this.picture = ""
  }

  uploadPicture(pictures: any){
    const file = pictures.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.picture = event.target!.result as string;
        console.log(event.target!.result)
      };
      reader.readAsDataURL(file)
    }
  }

}
