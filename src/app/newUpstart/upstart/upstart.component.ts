import { Component, OnInit } from '@angular/core';
import { faClock, faChartSimple, faAtlas } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-upstart',
  templateUrl: './upstart.component.html',
  styleUrls: ['./upstart.component.scss']
})
export class UpstartComponent implements OnInit {
  faClock = faClock
  product: Array<Product> = []
  faAtlas = faAtlas
  faChartSimple = faChartSimple

  constructor(
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this.product = this.productsService.getUpstartProducts();
   
    
  }
}
