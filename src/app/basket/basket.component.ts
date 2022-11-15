import { Component, OnInit } from '@angular/core';
import { Shoping } from '../mocks/products';
import { faClock,faChartSimple,faAtlas,faUser } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';
import { shoping } from '../shared/models';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  faClock=faClock
  faUse=faUser
  faAtlas=faAtlas
  faChartSimple=faChartSimple
  Shoping:Array<shoping>=[]
  constructor(private ProductServices:ProductService) { }

  ngOnInit(): void {
    this.Shoping=this.ProductServices.getShop()
  }

}
