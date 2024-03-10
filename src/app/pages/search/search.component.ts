import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

  

  constructor(private router: ActivatedRoute,
              public _pS: ProductosService){}


  ngOnDestroy(): void {
    // alert("Estúpida");    
  }

  ngOnInit(): void {
    this.router.params
    .subscribe( params => {      
      this._pS.buscarProducto(params['termino']);      
    })
  }

}
