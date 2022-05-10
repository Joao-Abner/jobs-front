import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmpresasRegisterComponent } from "./empresas-register/empresas-register-component";
import { EmpresasRoutingModule } from "./empresas-routing-module";
import { EmpresasComponent } from "./empresas.component";


@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresasRegisterComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    EmpresasComponent,
    EmpresasRegisterComponent
  ]
})

export class EmpresasModule {
}
