import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlApi = "https://portafolio-3227a-default-rtdb.firebaseio.com/";
  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 

    this.cargarProductos();
  }


  private cargarProductos() {
      this.http.get(this.urlApi + "Productos_idx.json")
      .subscribe((respuesta: any) => {
        console.log(respuesta); 
        this.productos = respuesta;
        this.cargando = false; 
      });

  }

}
