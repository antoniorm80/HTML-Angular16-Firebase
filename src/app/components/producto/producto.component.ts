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

  constructor(private route: ActivatedRoute, public _pS: ProductosService){}

  ngOnInit(): void {
    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id']);
        this._pS.getProdutcto(parametros['id'])
          .subscribe( (producto: any) => {
            this.producto = producto;
            console.log(producto);
            
          });
      });
  }

}
