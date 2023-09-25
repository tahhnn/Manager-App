import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';

const routes: Routes = [{path: "", component: MainPageComponent},
{path: "products", component: HomeComponent},
{path:"detail/:id", component: DetailPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
