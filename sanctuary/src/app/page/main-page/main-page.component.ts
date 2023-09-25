import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ProductsService } from 'src/app/servies/products.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  product: IProduct[] =[];
  constructor(private productsService: ProductsService){}
  ngOnInit(): void {
      this.productsService.getAll().subscribe((data: any) => {
        this.product = data.data;
        console.log(this.product);
      })
      
  }
}
