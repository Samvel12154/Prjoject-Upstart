import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductImg } from 'src/app/shared/models';
@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {
  image:Array<ProductImg>=[]
  constructor(private productsService:ProductService) { }

  ngOnInit(): void {
this.image=this.productsService.getNewImg()
  }

}
