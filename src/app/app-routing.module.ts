
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaLayoutComponent } from './empresas/empresa-layout/empresa-layout.component';
import { VagasComponent } from './vagas/all-vagas/vagas.component';

const routes: Routes = [
    {path:'vagas',component:VagasComponent},
    {path:'empresa',component:EmpresaLayoutComponent},
    {path:'empresas',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
