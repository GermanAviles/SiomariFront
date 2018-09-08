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
    this.nombreSistema = "Sistema de información operacional para la utilización de manejo de agua";
    this.nombreDistri = "Distrito de adecuación de tierras de mediana escala el juncal";
  }

  ngOnInit() {
  }

}
