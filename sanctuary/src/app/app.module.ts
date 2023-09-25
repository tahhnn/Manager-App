import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxPipe } from './search-box.pipe';
import { ProductEditComponent } from './composnent/product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { MainPageComponent } from './page/main-page/main-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchBoxPipe,
    ProductEditComponent,
    MainPageComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
