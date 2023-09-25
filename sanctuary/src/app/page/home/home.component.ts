import { IProduct } from 'src/app/interface/products';
import { ProductsService } from './../../servies/products.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // title:string = "Đây là tiêu đề"
  // changeTitle(e: Event){
  //   this.title = (e.target as HTMLInputElement).value
  // }
  // changeTitleOnClick(){
  //   this.title = "ok";
    
  // }
  products:IProduct[] = []
  searchText: string = "";
  ngOnInit(){
    this.loadProduct();
  }
  constructor(private ProductsService: ProductsService) {}
  loadProduct(){
    this.ProductsService.getAll().subscribe({
      next: (data:any) =>{
        this.products = data.data;
      },
      error: (eror) =>{
        console.log(eror.message);
      },
      complete: () =>{
        console.log('chim');
        
      }
   });
  }
  removeProduct(productId: string){
    this.ProductsService.removeProduct(productId).subscribe(
      ()=>{
        this.products = this.products.filter((p:any) => p._id !== productId)
    },(error)=>{
      console.log(error.message);
    })
    
  }
  // currencyChange = (item: any) => {
  //   console.log(item.includes('₫'));
    
  //   if (item.includes('₫')) {
  //     const currencySymbol = 'đ'; 
  //     const itemWithoutSymbol = item.replace(item[0], '') * 1000; 
  
  //     return `${itemWithoutSymbol.toLocaleString()}${currencySymbol}`;
  //   }
  
  //   return item;
  // }
  

}
