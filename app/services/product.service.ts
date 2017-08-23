import { Injectable } from '@angular/core';
import { Product } from '../Product';
@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    const products: Product[] = [];

    products.push(
      new Product('Adobe InDesign CC Classroom in a Book (2017 release)', 'https://images-na.ssl-images-amazon.com/images/I/51QxFbYN5tL._SX401_BO1,204,203,200_.jpg', 'Adobe', 200, 15,0,false),
      new Product('Adobe Dreamweaver CC Classroom in a Book (2017 release)-Adobe Press (2017)', 'http://www.adobepress.com/ShowCover.asp?isbn=0134664280', 'Adobe', 190, 20,0,false),
      new Product('Mastering Autodesk Maya 2016', 'http://media.wiley.com/product_data/coverImage300/28/11190598/1119059828.jpg', 'AutoDesk', 150, 50,0,false),
      new Product('Mastering Autodesk Revit 2016', 'http://media.wiley.com/product_data/coverImage300/72/11190593/1119059372.jpg', 'AutoDesk', 290, 10,0,false),
      new Product('building Websites all-in-one', 'http://ecx.images-amazon.com/images/I/51kvt2x8T-L._SX258_BO1,204,203,200_.jpg', 'for dummies', 350, 20,0,false)
                 );
    return products;
  }

}
