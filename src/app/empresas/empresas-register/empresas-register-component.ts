
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas-register',
  templateUrl: './empresas-register.component.html',
  styleUrls: ['./empresas-register.component.css']
})

export class EmpresasRegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  constructor(
    private service:EmpresasService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    this.form = this.fb.group({
      nome:[null]
    });
  };

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => console.log(result),error => console.log(error))
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }
}
