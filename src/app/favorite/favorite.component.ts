import { Component, OnInit } from '@angular/core';
import { faClock,faChartSimple,faAtlas } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';
import { ShopingCart } from '../shared/models';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  faClock=faClock
  faAtlas=faAtlas
  faChartSimple=faChartSimple
  newproduct:Array<ShopingCart>=[]
  constructor(private ProductServices:ProductService) { }

  ngOnInit(): void {
    this.newproduct=this.ProductServices.getMyLerning()
  }

}
