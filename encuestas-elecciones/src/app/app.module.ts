import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    EncuestasComponent,

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'encuestas', component: EncuestasComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
