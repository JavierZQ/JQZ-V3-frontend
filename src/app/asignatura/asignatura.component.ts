import { Asignatura } from './Asignatura';

import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

AsignaturaList:any;

  constructor(private Asignatura:AsignaturaService) { }

  ngOnInit(): void {
    this.listarAsignatura();
  }

listarAsignatura(){
  this.Asignatura.listarASIG().subscribe((res:any) => {
  this.AsignaturaList = res.data;
} )
}  
  
}
