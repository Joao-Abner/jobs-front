import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasRegisterComponent } from './empresas-register/empresas-register-component';
import { EmpresasComponent } from './empresas.component';


const routes: Routes = [
  {path:'',component:EmpresasComponent},
  {path:'gegister',component:EmpresasRegisterComponent},
  {path:'editar/:id',component:EmpresasRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpresasRoutingModule {
}
