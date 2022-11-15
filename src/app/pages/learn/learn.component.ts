import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/mocks/products';
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  country1: number = 1000
  country2: number = 5000
  country3: number = 200
  plus: any = "+"
  product = product
  constructor() {

  }
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

}
