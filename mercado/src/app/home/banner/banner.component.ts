import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Output() onClickImage: EventEmitter<string> = new EventEmitter();
  @Input() image!: string;
}

