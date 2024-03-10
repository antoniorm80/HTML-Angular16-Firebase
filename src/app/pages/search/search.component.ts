import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

  constructor(private router: ActivatedRoute,
              public _pS: ProductosService){}

  ngOnInit(): void {
    this.router.params
    .subscribe( params => {
      console.log(params['termino']);
      this._pS.buscarProducto(params['termino']);      
    })
  }

}
