import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';

@NgModule({
  declarations: [MeuPrimeiroComponenteComponent],
  imports: [CommonModule],
  exports: [MeuPrimeiroComponenteComponent],
})
export class MeuPrimeiroModuloModule {}
