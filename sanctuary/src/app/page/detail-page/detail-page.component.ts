import { ProductsService } from 'src/app/servies/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  products: any = [];
  constructor(private route: ActivatedRoute,private productsService: ProductsService){}
  ngOnInit(): void {
    const productId:any = this.route.snapshot.paramMap.get('id');
      this.productsService.getOneProduct(productId).subscribe((data:any) =>{
        this.products = data.data
        console.log(this.products);
      })
  }
}
