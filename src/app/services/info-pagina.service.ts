import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    // alert("infPagina listo");
    // leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log( resp.pagina_autor );
      console.log(resp)
    });
  }
}
