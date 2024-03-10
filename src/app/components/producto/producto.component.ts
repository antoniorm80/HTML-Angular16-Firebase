import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from "./../../interfaces/producto.descripcion.interface";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit{

  producto!: ProductoDescripcion;
  id!: string;

  constructor(private route: ActivatedRoute, public _pS: ProductosService){}

  ngOnInit(): void {
    this.route.params
      .subscribe( parametros => {        
        this._pS.getProducto(parametros['id'])
          .subscribe( (producto: any) => {
            this.id = parametros['id'];
            this.producto = producto;         
          });
      });
  }

}
