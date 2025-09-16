import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [HomeComponent, BannerComponent],
  exports: [HomeComponent, BannerComponent]
})
export class HomeModule { }
