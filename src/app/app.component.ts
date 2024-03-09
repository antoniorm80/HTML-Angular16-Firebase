import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';

  constructor(private firebaseService: FirebaseService,
              private productosService: ProductosService ){
    
  }


}
