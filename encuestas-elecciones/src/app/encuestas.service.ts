import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'; // Asegúrate de importar 'map'

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  private votosSubject = new BehaviorSubject<number[]>([]);
  votos$ = this.votosSubject.asObservable();

  constructor() { }

  agregarVoto(voto: number) {
    const votosActuales = this.votosSubject.value;
    votosActuales.push(voto);
    this.votosSubject.next(votosActuales);
  }

  obtenerIndicadores() {
    return this.votos$.pipe(
      map(votos => {
        // Lógica para calcular indicadores
      })
    );
  }
}