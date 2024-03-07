import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  
  AboutComponent, 
  PortafolioComponent, 
  ProductoComponent,
  ContactoComponent
 } from "./components/index.paginas";

const routes: Routes = [

  {path: '', component: PortafolioComponent, title:'Portafolio'},
  {path: 'about', component: AboutComponent, title: 'Acerca'},
  {path: 'producto', component: ProductoComponent, title: 'Producto'},
  {path: 'contacto', component: ContactoComponent, title: 'Contacto'},
  {path: '**', redirectTo: '', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
