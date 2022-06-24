import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CreateComponent } from './asignatura/create/create.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'asignatura',
    component : AsignaturaComponent
  },
  {
    path:'asignatura/form',
    component : CreateComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
