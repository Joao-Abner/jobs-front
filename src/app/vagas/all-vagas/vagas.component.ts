import { Component, OnInit } from '@angular/core';
import { catchError, empty, map, Observable } from 'rxjs';
import { Vagas } from '../vagas';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas$!:Observable<Vagas[]>

  constructor(
    private service:VagasService
  ) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.vagas$ = this.service.list().pipe(
      map(result => result.vagas),
      catchError((error: any) => {
        console.error(error);
        return empty();
      }))
  }

}
