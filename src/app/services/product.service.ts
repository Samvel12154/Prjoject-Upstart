import { Injectable, } from '@angular/core';
import { product,newproduct,image,Shoping,MyLerning } from '../mocks/products';
import { Product,ProductImg,shoping,ShopingCart } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
   
  ) { }

  getUpstartProducts(): Array<Product> {
    return product;
  }

  getNewproducts(): Array<Product> {
return  newproduct;
  }
  getNewImg(): Array<ProductImg> {
    return image
      }
      getShop():Array<shoping>{
return Shoping
      }
      getMyLerning():Array<ShopingCart>{
        return MyLerning
              }
}
