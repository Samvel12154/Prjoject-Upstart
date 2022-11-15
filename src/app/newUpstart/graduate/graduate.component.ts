import { Component, OnInit } from '@angular/core';
import { faClock, faChartSimple, faAtlas } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-graduate',
  templateUrl: './graduate.component.html',
  styleUrls: ['./graduate.component.scss']
})
export class GraduateComponent implements OnInit {
  faClock = faClock
  faAtlas = faAtlas
  faChartSimple = faChartSimple
  newproduct: Array<Product> = []
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.newproduct = this.productsService.getNewproducts()
  }

}
