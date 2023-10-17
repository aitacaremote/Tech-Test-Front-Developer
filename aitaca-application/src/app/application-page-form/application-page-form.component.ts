import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-application-page-form',
  templateUrl: './application-page-form.component.html',
  styleUrls: ['./application-page-form.component.css']
})
export class ApplicationPageFormComponent  implements OnInit, OnDestroy {
  
  websiteList ?: string [];  
  subscriber: any;
  form = new FormGroup({  
    website: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),  
    surname: new FormControl('', Validators.required),  
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),  
    city: new FormControl('',Validators.required),  
  });  
  constructor(private router: Router) {}
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  ngOnInit(): void {
    this.websiteList = ['linkedln','github','google']  
    this.subscriber = this.form?.valueChanges.subscribe(
      () => {}
    );
  }
    
  get f(){  
    return this.form?.controls;  
  }  

  submit(){  
    this.router.navigate(['app-application-success-page']).then(nav => {
      console.log(nav)
    }, err => {
      console.log(err) 
    });;
  }  

}