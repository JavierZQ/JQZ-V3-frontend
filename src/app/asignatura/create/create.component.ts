import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Asignatura } from './../Asignatura';
import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../asignatura.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  titulo: string="Registrar nueva Asignatura";
  asignatura:Asignatura = new Asignatura();
  constructor(private asignaturaService:AsignaturaService,
    private router: Router,
   private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }
 
  public crearAsignatura(): void{

    this.asignaturaService.registrar(this.asignatura).subscribe(
      //response => this.router.navigate(['/escuela']) anterior
      asignatura => {
       this.router.navigate(['/asignatura'])
     //  Swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )

  }

  
}
