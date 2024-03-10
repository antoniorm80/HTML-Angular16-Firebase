import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _fbs: FirebaseService, private router:Router, private _pS: ProductosService){}

  buscarProducto(termino: string) {
    
    if (termino.length < 1) {           
      return;
    }
    this.router.navigate(['/search', termino]);

  }
}
