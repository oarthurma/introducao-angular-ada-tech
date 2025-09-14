import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css'],
})
export class MeuPrimeiroComponenteComponent {
     
  public  year = 2023;

  acrescentarAno() {
    this.year++;
  }

  decrescerAno() {
    this.year--;
  }  
}
