import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  experiencia: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarExperiencia();
  }

  private cargarInfo(){
    // alert("infPagina listo");
    // leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarExperiencia(){
    this.http.get('https://angular-proy-5a4b4-default-rtdb.firebaseio.com/experiencia.json')
    .subscribe( (resp: any) => {
      this.experiencia = resp;
      console.log(resp);
    });
  }
}
