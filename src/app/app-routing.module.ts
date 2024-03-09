import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  
  HomeComponent,  
  PortafolioComponent, 
  ProductoComponent,
  AboutComponent, 
  ContactoComponent
 } from "./components/index.paginas";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:"full", title:'Home'},
  {path: 'home', component: HomeComponent, title:'Home'},  
  {path: 'portafolio', component: PortafolioComponent, title:'Portafolio'},  
  {path: 'producto/:id', component: ProductoComponent, title: 'Producto'},
  {path: 'about', component: AboutComponent, title: 'Acerca'},
  {path: 'contacto', component: ContactoComponent, title: 'Contacto'},
  {path: '**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
