import { Component } from '@angular/core';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent {
  opcionSeleccionada: number = 0;

  constructor(private encuestasService: EncuestasService) { }

  enviarEncuesta() {
    this.encuestasService.agregarVoto(this.opcionSeleccionada);
  }
}