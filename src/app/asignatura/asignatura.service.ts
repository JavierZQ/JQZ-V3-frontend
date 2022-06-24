import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/environments/environment'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Asignatura } from './Asignatura';
@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  api=URL_SERVICIOS
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(
    private http:HttpClient,
  ) { }

  listarASIG():Observable<any>{
    return this.http.get<any>(this.api+"/lista")
  }


  registrar(asignatura: Asignatura): Observable<any>{
    console.log(asignatura);
    return this.http.post<Asignatura>(this.api+"/registrar",asignatura,{headers: this.httpHeaders})

  }
  
}
