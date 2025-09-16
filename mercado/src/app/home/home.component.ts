import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image: string = 'assets/images/logo.jpeg';

  result!: string;
  constructor() {}

  ngOnInit() {
  }

  receberResult(value: string) {
    this.result = value
  }
}
