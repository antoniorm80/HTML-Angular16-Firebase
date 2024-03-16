import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  info: any = {};
  equipo: any = [];
  cargada: boolean = false;
  cargada_sobre_nosotros: boolean = false;

  constructor(public http:HttpClient) { 
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.http.get("assets/data/info.pages.json")
    .subscribe( data => {      
      this.info = data;
      this.cargada = true;      
    });
  }

  public carga_sobre_nosotros(){
     this.http.get("https://portafolio-3227a-default-rtdb.firebaseio.com/Equipo.json")
    .subscribe( data => {             
      this.equipo = data;
      this.cargada_sobre_nosotros = true;      
    });
  }
}
