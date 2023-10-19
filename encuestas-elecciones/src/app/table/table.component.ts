import { Component } from '@angular/core';
import { PeriodicElement } from './../periodic-element'; 

export const ELEMENT_DATA: PeriodicElement[] = [
  { posicion: 1, nombre: 'La Libertad Avanza', siglas: 'LLA', porcentaje: 30.04, color: "#7c4ea5" },
  { posicion: 2, nombre: 'Juntos por el cambio', siglas: 'JXC', porcentaje: 28.28 ,color: "#f8c153" },
  { posicion: 3, nombre: 'Union por la patria', siglas: 'JXC', porcentaje: 27.7,color:  "#5194c3"},
  { posicion: 4, nombre: 'Hacemos por nuestro país', siglas: 'HNP', porcentaje: 3.83, color: '#01446d'},
];

ELEMENT_DATA.forEach(item => {
  item.porcentaje = (item.porcentaje / 30) * 100;
});

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns: string[] = ['posicion', 'nombre', 'siglas', 'porcentaje'];
  dataSource = ELEMENT_DATA;
}