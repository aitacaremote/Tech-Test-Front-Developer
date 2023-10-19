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
import { NavComponent } from './nav/nav.component';
import { MapComponent } from './map/map.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CartasComponent } from './cartas/cartas.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    EncuestasComponent,
    NavComponent,
    MapComponent,
    TableComponent,
    CarrouselComponent,
    CartasComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    HttpClientModule, 
    MatCardModule, 
    MatButtonModule,
    MatTooltipModule,
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
