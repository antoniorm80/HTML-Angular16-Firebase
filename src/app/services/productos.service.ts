import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlApi = "https://portafolio-3227a-default-rtdb.firebaseio.com/";
  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }


   cargarProductos() {
    return new Promise(  ( resolve, reject ) => {
      this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
          .subscribe( async(resp: any) => {
            this.productos = await resp;
            this.cargando = false;
            resolve(resp);
          });
    });    
  }

  getProducto(id: string) {   
    this.cargando = false;   
    return this.http.get(this.urlApi + `Productos/${id}.json`);         
  }

  buscarProducto(termino: string) {    
    if ( this.productos.length === 0 ) {
      // Esperar a que se carguen los productos.
      this.cargarProductos().then(() => {
        // Ejectuar después de tener los productos.
        // Aplicar el filtro.
          this.filtrarProductos(termino);
      });
    }else {
      // Aplicar el filtro
      this.filtrarProductos( termino);
    }   
  }

  private filtrarProductos(termino: string) {    
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino) >= 0 ) {
          this.productoFiltrado.push(prod);
      }
    });    
  }

}
