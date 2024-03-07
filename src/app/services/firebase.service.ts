import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  info: any = {};
  cargada: boolean = false;

  constructor(public http:HttpClient) { 

    this.http.get("assets/data/info.pages.json")
      .subscribe( data => {
        // console.log(data);
        this.info = data;
        this.cargada = true;
        console.log(this.info);
      })
  }
}
