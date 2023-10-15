import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationPageFormComponent } from './application-page-form/application-page-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    ApplicationPageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
