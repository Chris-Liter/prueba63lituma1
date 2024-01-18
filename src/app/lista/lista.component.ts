import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{

  cliente: any

  cli: any

  clienteNom: Cliente = new Cliente()
  /**
   *
   */
  constructor(private service: ApiService) {
    
  }
  ngOnInit(): void {
    this.service.listaEntera().subscribe(data => {
      console.log(data);
      this.cliente = data;
    });
  }

  buscar() {
    this.service.listar(this.clienteNom.dni).subscribe(data => {
      console.log(data);
      console.log(this.clienteNom.dni);
      this.cli = data;
    });
  }

}
