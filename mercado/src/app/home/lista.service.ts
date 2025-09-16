import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private httpCliente: HttpClient 
  ) { }

  getList() {
    return this.httpCliente.get('');   
  }
}
  