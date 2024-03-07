import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

  constructor(public _fbs: FirebaseService){

  }

}
