import { EmpresaProfileComponent } from './empresa-profile/empresa-profile.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmpresasRegisterComponent } from "./empresas-register/empresas-register-component";
import { EmpresasRoutingModule } from "./empresas-routing-module";



@NgModule({
  declarations: [
    EmpresasRegisterComponent,
    EmpresaProfileComponent,

  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    EmpresasRegisterComponent
  ]
})

export class EmpresasModule {
}
