import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from "./home/home.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"politics",component:CategoriesComponent},
  {path:"business",component:CategoriesComponent},
  {path:"health",component:CategoriesComponent},
  {path:"design",component:CategoriesComponent},
  {path:"sport",component:CategoriesComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
