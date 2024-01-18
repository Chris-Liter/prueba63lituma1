import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  listar(cedula: any){
    return this.http.get<any>(`http://localhost:8080/prueba63lituma/rs/clientes?dni=${cedula}`)
  }

  listaEntera(){
    return this.http.get<any>('http://localhost:8080/prueba63lituma/rs/clientes/list')
  }
}
