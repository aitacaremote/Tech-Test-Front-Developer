import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';  
@Component({
  selector: 'app-application-page-form',
  templateUrl: './application-page-form.component.html',
  styleUrls: ['./application-page-form.component.css']
})
export class ApplicationPageFormComponent {
  websiteList: any = ['Emre','Test']  
    
  form = new FormGroup({  
    website: new FormControl('', Validators.required)  
  });  
    
  get f(){  
    return this.form.controls;  
  }  
    
  submit(){  
    console.log(this.form.value);  
  }  
  changeWebsite(e:any) {  
    console.log(e.target.value);  
  }  
}