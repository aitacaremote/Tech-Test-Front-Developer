import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;




  colors = [
    { name: 'Buenos Aires', color: "#5194c3" },
    { name: 'Córdoba', color: "#7c4ea5" },
    { name: 'Neuquén', color: "#7c4ea5" },
    { name:'Entre Ríos', color: "#f8c153"},
    { name: "Catamarca",color: "#5194c3"},
    { name: "Ciudad Autónoma de Buenos Aires",color:"#7c4ea5"},
    { name: "Santa Cruz",color: "#7c4ea5"},
    { name: "Santa Fe",color: "#7c4ea5"},
    { name: "Chaco",color: "#5194c3"},
    { name: "Chubut",color: "#7c4ea5"},
    { name: "Corrientes",color: "#f8c153"},
    { name: "Formosa",color:"#5194c3"},
    { name: "La Pampa",color: "#7c4ea5"},
    { name: "La Rioja",color: "#7c4ea5"},
    { name: "Mendoza",color: "#7c4ea5"},
    { name: "Misiones",color: "#7c4ea5"},
    { name: "Río Negro",color: "#7c4ea5"},
    { name: "Salta",color: "#7c4ea5"},
    { name: "San Juan",color: "#7c4ea5"},
    { name: "San Luis",color: "#7c4ea5"},
    { name: "Santa Cruz",color: "#7c4ea5"},
    { name: "Santiago del Estero",color: "#5194c3"},
    { name: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",color: "#7c4ea5"},
    { name: "Tucumán",color: "#7c4ea5"},
    { name: "Jujuy",color: "#7c4ea5"}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.map = L.map('map').setView([-35.6751, -63.5238], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);

    // Cargar el archivo JSON
    this.http.get<any>('./../../assets/provincia.json').subscribe(data => {
      data.features.forEach((province: any) => {
        const provinceName = province.properties.nam;
        const colorObject = this.colors.find(obj => obj.name === provinceName);

        if (colorObject) {
          const color = colorObject.color;
          L.geoJSON(province.geometry, { style: { fillColor: color, fillOpacity:1, color: 'white',weight: 0.5 } }).addTo(this.map);
        }
      });
    });
  }
}



