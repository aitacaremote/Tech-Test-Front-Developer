import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  title!:string

  constructor(
    private _title: TitleService
  ){}

  ngOnInit(){
    this._title.getTitlte().subscribe( (title:string) => this.title = title)
  }

}
