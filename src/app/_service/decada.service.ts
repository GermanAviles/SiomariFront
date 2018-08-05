import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './var.const';
import { Decada } from '../_model/decada';
import { HeaderToken } from './header-token';


@Injectable()
export class DecadaService {

  private url: string;
  // objeto que contrira el header de autorizacion
  private header: HeaderToken;

  constructor(
    private http: HttpClient
  ) {
    this.header = new HeaderToken();
    this.url = `${url}decada/`;
  }

  /**
   * se traera los datos por mes y año especificado
   * @param mes se debe especificar del 1-12 siendo 1 = enero y 12 = diciembre
   * @param year año
   */
  datosPorMesYYear(mes: number, year: number) {
    return this.http.get<Decada>(`${this.url}mesYYear/${mes}/${year}`,
      this.header.getHeader()
    );
  }

}
