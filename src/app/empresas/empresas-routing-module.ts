import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasRegisterComponent } from './empresas-register/empresas-register-component';



const routes: Routes = [
  {path:'register',component:EmpresasRegisterComponent},
  {path:'editar/:id',component:EmpresasRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpresasRoutingModule {
}
