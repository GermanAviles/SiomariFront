import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombreSistema:string;
  nombreDistri:string;

  constructor() {
    this.nombreSistema = "sistema de información operacional para la optimización hidráulica en el manejo del agua de riego";
    this.nombreDistri = "Distrito De Adecuación De Tierras De Mediana Escala El Juncal";
  }

  ngOnInit() {
  }

}
